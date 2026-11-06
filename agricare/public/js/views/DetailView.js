// VIEW: the pop-up with all details of one disease
import { el, badges, section, dialogHead, enableBackdropClose } from './dom.js';

export class DetailView {
  constructor() {
    this.dialog = document.querySelector('#detail-dialog');
    enableBackdropClose(this.dialog);
  }

  show(d) {
    this.dialog.replaceChildren(
      dialogHead(d.name, this.dialog),
      el('div', { class: 'dialog-body' },
        d.image ? el('img', { class: 'detail-img', src: d.image, alt: d.name }) : null,
        badges(d, 'margin-bottom:14px'),
        section('What it looks like', d.symptoms),
        section('Main cause', d.cause),
        section('Prevention', d.prevention),
        section('Treatment', d.treatment),
        el('p', { class: 'note' }, 'Always follow product labels and local agricultural guidelines when using any treatment.')
      )
    );
    this.dialog.showModal();
  }
}
