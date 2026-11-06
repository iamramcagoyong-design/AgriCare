// MODEL (backend): everything about the disease data and where it is stored.
// Storage is a JSON file, so no database is needed.
const fs = require('fs').promises;
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'diseases.json');
const CATEGORIES = ['Fungal', 'Bacterial', 'Viral', 'Pest', 'Weather', 'Soil / Nutrient'];

// Runs read-modify-write operations one at a time so two requests can't overwrite each other
let queue = Promise.resolve();
function withLock(task) {
  const run = queue.then(task);
  queue = run.catch(() => {});
  return run;
}

const toLines = (text) =>
  String(text || '').split('\n').map((s) => s.trim()).filter(Boolean);

async function getAll() {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
  } catch {
    return []; // file doesn't exist yet
  }
}

const saveAll = (list) => fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2));

function validate(data) {
  const { name, plant, category, symptoms, cause } = data;
  if (!name || !plant || !symptoms || !cause || !CATEGORIES.includes(category)) {
    return 'Please fill in all required fields';
  }
  return null;
}

function create(data, image) {
  return withLock(async () => {
    const disease = {
      id: Date.now().toString(),
      name: data.name.trim(),
      plant: data.plant.trim(),
      category: data.category,
      symptoms: data.symptoms.trim(),
      cause: data.cause.trim(),
      prevention: toLines(data.prevention),
      treatment: toLines(data.treatment),
      image: image || null
    };
    const list = await getAll();
    list.push(disease);
    await saveAll(list);
    return disease;
  });
}

// Returns the removed disease, or null if the id doesn't exist
function remove(id) {
  return withLock(async () => {
    const list = await getAll();
    const target = list.find((d) => d.id === id);
    if (!target) return null;
    await saveAll(list.filter((d) => d.id !== id));
    return target;
  });
}

module.exports = { CATEGORIES, getAll, validate, create, remove };
