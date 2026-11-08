import View from './View.js';
import { photo } from './parts.js';

// The list on the "Manage" tab, with Edit and Delete buttons for each disease.
class ManageListView extends View {
  constructor() {
    super('#manage-list');
    this.resetBtn = document.querySelector('#reset-data');
    this.editHandler = () => {};
    this.deleteHandler = () => {};
    this.resetHandler = () => {};

    this.resetBtn.addEventListener('click', () => {
      if (confirm('Replace everything with the sample diseases? Your own entries will be removed.')) this.resetHandler();
    });
  }

  onEdit(handler) { this.editHandler = handler; }
  onDelete(handler) { this.deleteHandler = handler; }
  onReset(handler) { this.resetHandler = handler; }

  render({ diseases, editingId }) {
    if (diseases.length === 0) {
      this.replace(this.root, this.el('p', { class: 'muted' }, 'No diseases yet. Add one with the form above.'));
      return;
    }
    this.replace(this.root, diseases.map((disease) => {
      const { id, name, plant, category } = disease;
      return this.el('div', { class: id === editingId ? 'item editing' : 'item' },
        photo(disease, 'mini-photo'),
        this.el('div', { class: 'info' }, this.el('strong', {}, name), this.el('div', {}, `${plant} · ${category}`)),
        this.el('button', { class: 'btn secondary', type: 'button', on: { click: () => this.editHandler(id) } }, 'Edit'),
        this.el('button', {
          class: 'btn danger',
          type: 'button',
          on: { click: () => { if (confirm(`Delete "${name}"?`)) this.deleteHandler(id); } },
        }, 'Delete'));
    }));
  }
}

export default new ManageListView();
