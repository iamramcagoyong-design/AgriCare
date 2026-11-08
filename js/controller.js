// CONTROLLER: connects the model and the views. It builds no HTML.
// Every user action = change the model, then render again.
import * as model from './model.js';
import { CATEGORIES } from './data.js';
import tabView from './views/TabView.js';
import filterView from './views/FilterView.js';
import cardListView from './views/CardListView.js';
import detailView from './views/DetailView.js';
import compareView from './views/CompareView.js';
import formView from './views/FormView.js';
import manageListView from './views/ManageListView.js';
import calculatorView from './views/CalculatorView.js';

const { state } = model;

// Gives each view the data it needs
function render() {
  tabView.render({ tabs: model.TABS, active: state.tab });
  filterView.render({ filters: state.filters, plants: model.getPlants(), categories: CATEGORIES });
  cardListView.render({ diseases: model.getFilteredDiseases(), compareIds: state.compareIds, total: state.diseases.length });
  manageListView.render({ diseases: state.diseases, editingId: state.editingId });
  detailView.render(model.getSelectedDisease());
  compareView.renderBar({ count: state.compareIds.length, max: model.MAX_COMPARE });
  compareView.renderDialog(state.compareOpen ? model.getComparedDiseases() : null);
  calculatorView.render(model.getIncidence());
}

// ---------- Wire up user actions ----------
tabView.onTabChange((id) => {
  model.setTab(id);
  render();
});

filterView.onChange((changes) => {
  model.setFilters(changes);
  render();
});

cardListView.onView((id) => {
  model.selectDisease(id);
  render();
});

cardListView.onCompareToggle((id) => {
  const result = model.toggleCompare(id);
  if (!result.ok) cardListView.showNotice(result.reason);
  render();
});

detailView.onClose(() => {
  model.closeDetail();
  render();
});

compareView.onOpen(() => {
  model.openCompare();
  render();
});

compareView.onClear(() => {
  model.clearCompare();
  render();
});

compareView.onClose(() => {
  model.closeCompare();
  render();
});

formView.onSubmit((data) => {
  const editing = state.editingId !== null;
  const result = editing ? model.updateDisease(state.editingId, data) : model.addDisease(data);
  if (!result.ok) {
    formView.showErrors(result.errors);
    return;
  }
  formView.reset();
  formView.showSuccess(editing ? 'Disease updated.' : 'Disease added. It now appears on the Diseases tab.');
  render();
});

formView.onCancel(() => {
  model.cancelEdit();
  formView.reset();
  render();
});

manageListView.onEdit((id) => {
  model.startEdit(id);
  formView.fill(model.getEditingDisease());
  render();
});

manageListView.onDelete((id) => {
  const wasEditing = state.editingId === id;
  model.deleteDisease(id);
  if (wasEditing) formView.reset();
  render();
});

manageListView.onReset(() => {
  model.resetData();
  formView.reset();
  render();
});

calculatorView.onInput((values) => {
  model.setCalculator(values);
  render();
});

// ---------- Start ----------
model.loadState();
formView.setCategories(CATEGORIES);
calculatorView.setInputs(state.calculator);
render();
