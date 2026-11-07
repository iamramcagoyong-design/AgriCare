// VIEWS (admin page): login box, add-disease form, and the list of entries
import { el } from './dom.js';

const $ = (sel) => document.querySelector(sel);

function showMessage(target, text, ok) {
  target.replaceChildren(el('div', { class: 'message ' + (ok ? 'ok' : 'err') }, text));
}

export class LoginView {
  constructor() {
    this.box = $('#login');
    this.tools = $('#tools');
    this.message = $('#login-msg');
    this.input = $('#password');
  }
  onLogin(handler) {
    $('#login-btn').addEventListener('click', () => handler(this.input.value));
    this.input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handler(this.input.value); });
  }
  showError(text) { showMessage(this.message, text, false); }
  showTools() { this.box.hidden = true; this.tools.hidden = false; }
}

export class FormView {
  constructor() {
    this.form = $('#disease-form');
    this.message = $('#form-msg');
    this.title = $('#form-title');
    this.submitBtn = $('#submit-btn');
    this.cancelBtn = $('#cancel-edit');
  }
  populateCategories(categories) {
    const select = this.form.querySelector('select[name=category]');
    categories.forEach((c) => select.append(el('option', { value: c }, c)));
  }
  onSubmit(handler) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      handler(new FormData(this.form));
    });
  }
  onCancel(handler) { this.cancelBtn.addEventListener('click', handler); }

  // Put an existing disease into the form so it can be edited
  fillForm(d) {
    const set = (name, value) => { this.form.querySelector(`[name="${name}"]`).value = value; };
    set('name', d.name);
    set('plant', d.plant);
    set('category', d.category);
    set('symptoms', d.symptoms);
    set('cause', d.cause);
    set('prevention', d.prevention.join('\n'));
    set('treatment', d.treatment.join('\n'));
    set('image', ''); // file inputs can only be cleared, not pre-filled
    this.title.textContent = 'Edit disease';
    this.submitBtn.textContent = 'Update disease';
    this.cancelBtn.hidden = false;
    this.form.scrollIntoView({ behavior: 'smooth' });
  }

  // Back to "Add" mode
  reset() {
    this.form.reset();
    this.title.textContent = 'Add a disease';
    this.submitBtn.textContent = 'Save disease';
    this.cancelBtn.hidden = true;
  }
  showMessage(text, ok) { showMessage(this.message, text, ok); }
}

export class ListView {
  constructor() { this.list = $('#admin-list'); }
  render(diseases, onEdit, onDelete) {
    this.list.replaceChildren(...diseases.map((d) =>
      el('div', { class: 'item' },
        d.image ? el('img', { src: d.image, alt: '' }) : el('div', { class: 'mini' }, '🌿'),
        el('div', { class: 'info' }, el('strong', {}, d.name), el('div', {}, `${d.plant} · ${d.category}`)),
        el('button', { class: 'btn secondary', onclick: () => onEdit(d) }, 'Edit'),
        el('button', {
          class: 'btn danger',
          onclick: () => { if (confirm(`Delete "${d.name}"?`)) onDelete(d.id); }
        }, 'Delete')
      )
    ));
  }
}