// MODEL: all the data and the rules for changing it.
// It never touches the DOM and never imports a view.
import { CATEGORIES, SEED_DISEASES } from './data.js';

export const MAX_COMPARE = 3;
export const TABS = [
  { id: 'browse', label: 'Diseases' },
  { id: 'manage', label: 'Manage' },
  { id: 'calculator', label: 'Calculator' },
];

const STORAGE_KEY = 'agricare-state-v1';
const STORAGE_FULL = 'Could not save: browser storage is full. Try a smaller photo or delete an entry.';

// ---------- The one state object ----------
export const state = {
  diseases: [],
  filters: { search: '', plant: '', category: '' },
  compareIds: [],
  compareOpen: false,
  selectedId: null,
  editingId: null,
  tab: 'browse',
  calculator: { infected: '', total: '' },
};

// ---------- localStorage ----------
export function saveState() {
  try {
    const { diseases, calculator } = state; // only data worth keeping; screen state is not saved
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ diseases, calculator }));
    return true;
  } catch {
    return false;
  }
}

export function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.diseases)) {
      state.diseases = saved.diseases;
      state.calculator = { ...state.calculator, ...saved.calculator };
      return;
    }
  } catch {
    // unreadable data: fall through and start from the samples
  }
  state.diseases = structuredClone(SEED_DISEASES);
  saveState();
}

export function resetData() {
  state.diseases = structuredClone(SEED_DISEASES);
  Object.assign(state, { compareIds: [], compareOpen: false, selectedId: null, editingId: null });
  saveState();
}

// ---------- Helpers ----------
const makeId = () => `d-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
const toLines = (text) => String(text ?? '').split('\n').map((line) => line.trim()).filter(Boolean);

const clean = ({ name = '', plant = '', category = '', symptoms = '', cause = '', prevention = '', treatment = '' }) => ({
  name: name.trim(),
  plant: plant.trim(),
  category,
  symptoms: symptoms.trim(),
  cause: cause.trim(),
  prevention: toLines(prevention),
  treatment: toLines(treatment),
});

// ---------- Reading data (these never change state) ----------
export const getPlants = () => [...new Set(state.diseases.map((d) => d.plant))].sort();

export function getFilteredDiseases() {
  const { search, plant, category } = state.filters;
  const query = search.trim().toLowerCase();
  return state.diseases.filter((d) => {
    if (plant && d.plant !== plant) return false;
    if (category && d.category !== category) return false;
    if (!query) return true;
    return [d.name, d.plant, d.symptoms, d.cause, d.category].join(' ').toLowerCase().includes(query);
  });
}

export const getComparedDiseases = () => state.diseases.filter((d) => state.compareIds.includes(d.id));
export const getSelectedDisease = () => state.diseases.find((d) => d.id === state.selectedId) ?? null;
export const getEditingDisease = () => state.diseases.find((d) => d.id === state.editingId) ?? null;

// ---------- Validation ----------
// Returns an object of error messages keyed by field name. Empty object = valid.
export function validateDisease(data, ignoreId = null) {
  const { name, plant, category, symptoms, cause } = clean(data);
  const errors = {};

  if (name.length < 3) errors.name = 'Name must be at least 3 characters.';
  if (!plant) errors.plant = 'Plant is required.';
  if (!CATEGORIES.includes(category)) errors.category = 'Choose a cause type.';
  if (symptoms.length < 10) errors.symptoms = 'Describe the symptoms (at least 10 characters).';
  if (cause.length < 10) errors.cause = 'Describe the main cause (at least 10 characters).';

  const duplicate = state.diseases.some(
    (d) => d.id !== ignoreId && d.name.toLowerCase() === name.toLowerCase() && d.plant.toLowerCase() === plant.toLowerCase(),
  );
  if (duplicate && !errors.name && !errors.plant) errors.name = 'This disease is already listed for that plant.';

  return errors;
}

// ---------- Changing data ----------
export function addDisease(data) {
  const errors = validateDisease(data);
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const disease = { id: makeId(), ...clean(data), image: data.image ?? null };
  state.diseases.push(disease);
  if (!saveState()) {
    state.diseases.pop(); // undo, nothing was saved
    return { ok: false, errors: { _form: STORAGE_FULL } };
  }
  return { ok: true, disease };
}

export function updateDisease(id, data) {
  const index = state.diseases.findIndex((d) => d.id === id);
  if (index === -1) return { ok: false, errors: { _form: 'That disease no longer exists.' } };

  const errors = validateDisease(data, id);
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const previous = state.diseases[index];
  state.diseases[index] = { ...previous, ...clean(data), image: data.image ?? previous.image }; // no new photo = keep the old one
  if (!saveState()) {
    state.diseases[index] = previous; // undo
    return { ok: false, errors: { _form: STORAGE_FULL } };
  }
  state.editingId = null;
  return { ok: true };
}

export function deleteDisease(id) {
  state.diseases = state.diseases.filter((d) => d.id !== id);
  state.compareIds = state.compareIds.filter((cid) => cid !== id);
  if (state.compareIds.length < 2) state.compareOpen = false;
  if (state.selectedId === id) state.selectedId = null;
  if (state.editingId === id) state.editingId = null;
  saveState();
}

// ---------- Screen state ----------
export function setTab(id) {
  if (TABS.some((tab) => tab.id === id)) state.tab = id;
}

export function setFilters(changes) {
  state.filters = { ...state.filters, ...changes };
}

export function toggleCompare(id) {
  if (state.compareIds.includes(id)) {
    state.compareIds = state.compareIds.filter((cid) => cid !== id);
    if (state.compareIds.length < 2) state.compareOpen = false;
    return { ok: true };
  }
  if (state.compareIds.length >= MAX_COMPARE) {
    return { ok: false, reason: `You can compare up to ${MAX_COMPARE} diseases at a time.` };
  }
  state.compareIds.push(id);
  return { ok: true };
}

export function openCompare() {
  if (state.compareIds.length >= 2) state.compareOpen = true;
}
export const closeCompare = () => { state.compareOpen = false; };
export function clearCompare() {
  state.compareIds = [];
  state.compareOpen = false;
}

export const selectDisease = (id) => { state.selectedId = id; };
export const closeDetail = () => { state.selectedId = null; };

export function startEdit(id) {
  if (state.diseases.some((d) => d.id === id)) state.editingId = id;
}
export const cancelEdit = () => { state.editingId = null; };

// ---------- Calculator (the derived value) ----------
export function setCalculator({ infected = '', total = '' }) {
  state.calculator = { infected: String(infected), total: String(total) };
  saveState();
}

// Recomputed from the numbers every time they change.
// incidence % = infected / total x 100. Cutoffs are rough guides, not official thresholds.
export function getIncidence() {
  const { infected: infectedText, total: totalText } = state.calculator;
  if (infectedText === '' || totalText === '') {
    return { valid: false, message: 'Enter the number of infected plants and the total number of plants.' };
  }

  const infected = Number(infectedText);
  const total = Number(totalText);
  if (Number.isNaN(infected) || Number.isNaN(total)) return { valid: false, message: 'Please enter numbers only.' };
  if (total <= 0) return { valid: false, message: 'Total plants must be more than 0.' };
  if (infected < 0) return { valid: false, message: 'Infected plants cannot be negative.' };
  if (infected > total) return { valid: false, message: 'Infected plants cannot be more than the total.' };

  const percent = (infected / total) * 100;
  const [level, advice] =
    percent < 10
      ? ['Low', 'Remove the affected plants and keep checking the rest every few days.']
      : percent < 30
        ? ['Moderate', 'Act soon: remove infected plants, apply the recommended treatment and check daily for spread.']
        : ['High', 'The problem is widespread. Ask your local agriculture office for help right away.'];

  return { valid: true, percent, infected, total, healthy: total - infected, level, advice };
}
