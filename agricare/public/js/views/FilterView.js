// VIEW: search box and the two dropdown filters
import { el } from './dom.js';

export class FilterView {
  constructor() {
    this.search = document.querySelector('#search');
    this.plant = document.querySelector('#plant-filter');
    this.category = document.querySelector('#cat-filter');
  }

  populate(plants, categories) {
    plants.forEach((p) => this.plant.append(el('option', { value: p }, p)));
    categories.forEach((c) => this.category.append(el('option', { value: c }, c)));
  }

  // The controller passes a function that is called whenever a filter changes
  onChange(handler) {
    [this.search, this.plant, this.category].forEach((input) =>
      input.addEventListener('input', () =>
        handler({ search: this.search.value, plant: this.plant.value, category: this.category.value })
      )
    );
  }
}
