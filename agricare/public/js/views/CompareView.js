// VIEW: the pop-up that shows 2-3 diseases side by side
import { el, imageOrPlaceholder, badges, section, dialogHead, enableBackdropClose } from './dom.js';

export class CompareView {
  constructor() {
    this.dialog = document.querySelector('#compare-dialog');
    enableBackdropClose(this.dialog);
  }

  show(diseases) {
    const columns = diseases.map((d) =>
      el('div', { class: 'compare-col' },
        imageOrPlaceholder(d),
        el('h3', {}, d.name),
        badges(d, 'margin-bottom:12px'),
        section('What it looks like', d.symptoms),
        section('Main cause', d.cause),
        section('Prevention', d.prevention),
        section('Treatment', d.treatment)
      )
    );
    const grid = el('div', { class: 'compare-grid' }, columns);
    grid.style.setProperty('--cols', diseases.length);

    this.dialog.replaceChildren(
      dialogHead('Compare diseases', this.dialog),
      el('div', { class: 'dialog-body' }, grid)
    );
    this.dialog.showModal();
  }
}
