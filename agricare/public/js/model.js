// MODEL (frontend): holds the data and the rules (filtering, compare list).
// It never touches the page (no HTML here).
export const CATEGORIES = ['Fungal', 'Bacterial', 'Viral', 'Pest', 'Weather', 'Soil / Nutrient'];
export const MAX_COMPARE = 3;

export class DiseaseModel {
  constructor() {
    this.diseases = [];
    this.compareIds = new Set();
    this.filters = { search: '', plant: '', category: '' };
  }

  async load() {
    const res = await fetch('/api/diseases');
    this.diseases = await res.json();
  }

  getPlants() {
    return [...new Set(this.diseases.map((d) => d.plant))].sort();
  }

  setFilters(filters) {
    this.filters = { ...this.filters, ...filters };
  }

  getFiltered() {
    const { search, plant, category } = this.filters;
    const q = search.trim().toLowerCase();
    return this.diseases.filter((d) => {
      if (plant && d.plant !== plant) return false;
      if (category && d.category !== category) return false;
      if (!q) return true;
      return [d.name, d.plant, d.symptoms, d.cause, d.category].join(' ').toLowerCase().includes(q);
    });
  }

  // Compare list
  addToCompare(id) {
    if (this.compareIds.size >= MAX_COMPARE) return false;
    this.compareIds.add(id);
    return true;
  }
  removeFromCompare(id) { this.compareIds.delete(id); }
  clearCompare() { this.compareIds.clear(); }
  getCompared() { return this.diseases.filter((d) => this.compareIds.has(d.id)); }
}
