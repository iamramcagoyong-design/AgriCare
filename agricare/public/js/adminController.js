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
    this.editingId = null; // null = adding, otherwise the id being edited
  }

  async init() {
    this.formView.populateCategories(CATEGORIES);
    this.loginView.onLogin((pw) => this.login(pw));
    this.formView.onSubmit((data) => this.saveDisease(data));
    this.formView.onCancel(() => this.cancelEdit());

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

  async saveDisease(formData) {
    const wasEditing = this.editingId !== null;
    const result = wasEditing
      ? await this.model.update(this.editingId, formData)
      : await this.model.add(formData);

    if (!result.ok) return this.formView.showMessage(result.error, false);

    this.editingId = null;
    this.formView.reset();
    this.formView.showMessage(wasEditing ? 'Updated!' : 'Saved! It now appears on the public page.', true);
    this.refreshList();
  }

  startEdit(disease) {
    this.editingId = disease.id;
    this.formView.fillForm(disease);
  }

  cancelEdit() {
    this.editingId = null;
    this.formView.reset();
  }

  async refreshList() {
    const diseases = await this.model.list();
    this.listView.render(diseases, (d) => this.startEdit(d), async (id) => {
      await this.model.remove(id);
      this.refreshList();
    });
  }
}