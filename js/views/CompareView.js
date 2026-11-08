import View from './View.js';
import { photo, badges, infoSection, dialogHead } from './parts.js';

// The bar at the bottom ("2 selected") and the side-by-side comparison pop-up.
class CompareView extends View {
  constructor() {
    super('#compare-bar');
    this.dialog = document.querySelector('#compare-dialog');
    this.openHandler = () => {};
    this.clearHandler = () => {};
    this.closeHandler = () => {};
    this.dialog.addEventListener('close', () => this.closeHandler());
    this.dialog.addEventListener('click', (event) => { if (event.target === this.dialog) this.dialog.close(); });
  }

  onOpen(handler) { this.openHandler = handler; }
  onClear(handler) { this.clearHandler = handler; }
  onClose(handler) { this.closeHandler = handler; }

  renderBar({ count, max }) {
    this.root.hidden = count === 0;
    this.replace(this.root,
      this.el('span', {}, `${count} selected (pick 2-${max})`),
      this.el('button', { class: 'btn', type: 'button', disabled: count < 2, on: { click: () => this.openHandler() } }, 'Compare'),
      this.el('button', { class: 'btn secondary', type: 'button', on: { click: () => this.clearHandler() } }, 'Clear'));
  }

  // Pass null to close the pop-up
  renderDialog(diseases) {
    if (!diseases) {
      if (this.dialog.open) this.dialog.close();
      return;
    }
    const columns = diseases.map((disease) => {
      const { name, symptoms, cause, prevention, treatment } = disease;
      return this.el('div', { class: 'compare-col' },
        photo(disease),
        this.el('h3', {}, name),
        badges(disease, 'margin-bottom:12px'),
        infoSection('What it looks like', symptoms),
        infoSection('Main cause', cause),
        infoSection('Prevention', prevention),
        infoSection('Treatment', treatment));
    });
    const grid = this.el('div', { class: 'compare-grid' }, columns);
    grid.style.setProperty('--cols', diseases.length);

    this.replace(this.dialog, dialogHead('Compare diseases', this.dialog), this.el('div', { class: 'dialog-body' }, grid));
    if (!this.dialog.open) this.dialog.showModal();
  }
}

export default new CompareView();
