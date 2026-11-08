import View from './View.js';
import { photo, badges } from './parts.js';

// The grid of disease cards on the "Diseases" tab.
class CardListView extends View {
  constructor() {
    super('#card-list');
    this.count = document.querySelector('#result-count');
    this.empty = document.querySelector('#empty-msg');
    this.notice = document.querySelector('#notice');
    this.noticeTimer = null;
    this.viewHandler = () => {};
    this.compareHandler = () => {};
  }

  onView(handler) { this.viewHandler = handler; }
  onCompareToggle(handler) { this.compareHandler = handler; }

  render({ diseases, compareIds, total }) {
    this.replace(this.root, diseases.map((disease) => this.createCard(disease, compareIds.includes(disease.id))));
    this.count.textContent = `Showing ${diseases.length} of ${total} diseases`;
    this.empty.hidden = diseases.length > 0;
  }

  createCard(disease, selected) {
    const { id, name, symptoms } = disease;
    const checkbox = this.el('input', { type: 'checkbox', checked: selected, on: { change: () => this.compareHandler(id) } });

    return this.el('article', { class: selected ? 'card selected' : 'card' },
      photo(disease),
      this.el('div', { class: 'body' },
        this.el('h3', {}, name),
        badges(disease),
        this.el('p', { class: 'snippet' }, symptoms),
        this.el('div', { class: 'actions' },
          this.el('button', { class: 'btn', type: 'button', on: { click: () => this.viewHandler(id) } }, 'View details'),
          this.el('label', { class: 'compare-check' }, checkbox, 'Compare'))));
  }

  // Short message above the grid (for example: the compare limit was reached)
  showNotice(text) {
    this.notice.textContent = text;
    this.notice.hidden = false;
    clearTimeout(this.noticeTimer);
    this.noticeTimer = setTimeout(() => { this.notice.hidden = true; }, 3000);
  }
}

export default new CardListView();
