// CONTROLLER (admin page): connects the admin model and views.
import { CATEGORIES } from './model.js';
import { AdminModel } from './adminModel.js';
import { LoginView, FormView, ListView } from './views/AdminViews.js';

export class AdminController {
  constructor() {
    this.model = new AdminModel();
    this.loginView = new LoginView();
    this.formView = new FormView();
    this.listView = new ListView();
  }

  async init() {
    this.formView.populateCategories(CATEGORIES);
    this.loginView.onLogin((pw) => this.login(pw));
    this.formView.onSubmit((data) => this.addDisease(data));

    // stay logged in during this browser session
    if (this.model.password) await this.login(this.model.password, true);
  }

  async login(password, silent = false) {
    if (!(await this.model.login(password))) {
      if (!silent) this.loginView.showError('Wrong password.');
      return;
    }
    this.loginView.showTools();
    this.refreshList();
  }

  async addDisease(formData) {
    const result = await this.model.add(formData);
    if (!result.ok) return this.formView.showMessage(result.error, false);
    this.formView.reset();
    this.formView.showMessage('Saved! It now appears on the public page.', true);
    this.refreshList();
  }

  async refreshList() {
    const diseases = await this.model.list();
    this.listView.render(diseases, async (id) => {
      await this.model.remove(id);
      this.refreshList();
    });
  }
}
