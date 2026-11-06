// VIEW: the grid of disease cards
import { el, imageOrPlaceholder, badges } from './dom.js';

export class CardView {
  constructor() {
    this.grid = document.querySelector('#grid');
    this.empty = document.querySelector('#empty');
  }

  // handlers = { onView(disease), onToggle(id, checked, resetCheckbox) }
  render(diseases, compareIds, handlers) {
    this.grid.replaceChildren(...diseases.map((d) => this.createCard(d, compareIds.has(d.id), handlers)));
    this.empty.hidden = diseases.length > 0;
  }

  createCard(d, selected, handlers) {
    const checkbox = el('input', { type: 'checkbox' });
    checkbox.checked = selected;
    checkbox.addEventListener('change', () =>
      handlers.onToggle(d.id, checkbox.checked, () => { checkbox.checked = false; })
    );

    return el('article', { class: 'card' + (selected ? ' selected' : '') },
      imageOrPlaceholder(d),
      el('div', { class: 'body' },
        el('h3', {}, d.name),
        badges(d),
        el('p', { class: 'snippet' }, d.symptoms),
        el('div', { class: 'actions' },
          el('button', { class: 'btn', onclick: () => handlers.onView(d) }, 'View details'),
          el('label', { class: 'compare-check' }, checkbox, 'Compare')
        )
      )
    );
  }
}
