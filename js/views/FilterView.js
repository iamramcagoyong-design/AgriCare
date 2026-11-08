import View from './View.js';

// Search box + plant and cause dropdowns.
class FilterView extends View {
  constructor() {
    super('#filters');
    this.search = this.root.querySelector('#search');
    this.plant = this.root.querySelector('#plant-filter');
    this.category = this.root.querySelector('#cat-filter');
    this.changeHandler = () => {};

    [this.search, this.plant, this.category].forEach((input) =>
      input.addEventListener('input', () => this.changeHandler({
        search: this.search.value,
        plant: this.plant.value,
        category: this.category.value,
      })));
  }

  onChange(handler) { this.changeHandler = handler; }

  render({ filters, plants, categories }) {
    this.fillSelect(this.plant, 'All plants', plants, filters.plant);
    this.fillSelect(this.category, 'All causes', categories, filters.category);
    if (this.search.value !== filters.search) this.search.value = filters.search;
  }

  // Only rebuilds the options when the list actually changed, so an open dropdown is not disturbed
  fillSelect(select, allLabel, options, selected) {
    const wanted = ['', ...options];
    const current = [...select.options].map((option) => option.value);
    if (wanted.join('|') !== current.join('|')) {
      this.replace(select, wanted.map((value) => this.el('option', { value }, value || allLabel)));
    }
    select.value = selected;
  }
}

export default new FilterView();
