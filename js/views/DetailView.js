import View from './View.js';
import { photo, badges, infoSection, dialogHead } from './parts.js';

// Pop-up with every detail of one disease.
class DetailView extends View {
  constructor() {
    super('#detail-dialog');
    this.closeHandler = () => {};
    this.root.addEventListener('close', () => this.closeHandler());
    this.root.addEventListener('click', (event) => { if (event.target === this.root) this.root.close(); }); // click on backdrop
  }

  onClose(handler) { this.closeHandler = handler; }

  render(disease) {
    if (!disease) {
      if (this.root.open) this.root.close();
      return;
    }
    const { name, symptoms, cause, prevention, treatment } = disease;
    this.replace(this.root,
      dialogHead(name, this.root),
      this.el('div', { class: 'dialog-body' },
        photo(disease, 'detail-img'),
        badges(disease, 'margin:14px 0'),
        infoSection('What it looks like', symptoms),
        infoSection('Main cause', cause),
        infoSection('Prevention', prevention),
        infoSection('Treatment', treatment),
        this.el('p', { class: 'note' }, 'Always follow product labels and local agricultural guidelines when using any treatment.')));
    if (!this.root.open) this.root.showModal();
  }
}

export default new DetailView();
