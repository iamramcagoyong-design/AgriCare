// CONTROLLER (public page): connects the model and the views.
import { DiseaseModel, CATEGORIES, MAX_COMPARE } from './model.js';
import { FilterView } from './views/FilterView.js';
import { CardView } from './views/CardView.js';
import { DetailView } from './views/DetailView.js';
import { CompareView } from './views/CompareView.js';
import { CompareBarView } from './views/CompareBarView.js';

export class DiseaseController {
  constructor() {
    this.model = new DiseaseModel();
    this.filterView = new FilterView();
    this.cardView = new CardView();
    this.detailView = new DetailView();
    this.compareView = new CompareView();
    this.barView = new CompareBarView();
  }

  async init() {
    await this.model.load();
    this.filterView.populate(this.model.getPlants(), CATEGORIES);

    this.filterView.onChange((filters) => {
      this.model.setFilters(filters);
      this.refresh();
    });

    this.barView.bind({
      onCompare: () => this.compareView.show(this.model.getCompared()),
      onClear: () => { this.model.clearCompare(); this.refresh(); }
    });

    this.refresh();
  }

  refresh() {
    this.cardView.render(this.model.getFiltered(), this.model.compareIds, {
      onView: (disease) => this.detailView.show(disease),
      onToggle: (id, checked, resetCheckbox) => this.toggleCompare(id, checked, resetCheckbox)
    });
    this.barView.render(this.model.compareIds.size, MAX_COMPARE);
  }

  toggleCompare(id, checked, resetCheckbox) {
    if (checked) {
      if (!this.model.addToCompare(id)) {
        resetCheckbox();
        this.barView.warnLimit(MAX_COMPARE);
        return;
      }
    } else {
      this.model.removeFromCompare(id);
    }
    this.refresh();
  }
}
