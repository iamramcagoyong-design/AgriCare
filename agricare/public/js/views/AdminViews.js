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
  reset() { this.form.reset(); }
  showMessage(text, ok) { showMessage(this.message, text, ok); }
}

export class ListView {
  constructor() { this.list = $('#admin-list'); }
  render(diseases, onDelete) {
    this.list.replaceChildren(...diseases.map((d) =>
      el('div', { class: 'item' },
        d.image ? el('img', { src: d.image, alt: '' }) : el('div', { class: 'mini' }, '🌿'),
        el('div', { class: 'info' }, el('strong', {}, d.name), el('div', {}, `${d.plant} · ${d.category}`)),
        el('button', {
          class: 'btn danger',
          onclick: () => { if (confirm(`Delete "${d.name}"?`)) onDelete(d.id); }
        }, 'Delete')
      )
    ));
  }
}
