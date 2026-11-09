import View from './View.js';

const FIELDS = ['name', 'plant', 'category', 'symptoms', 'cause', 'prevention', 'treatment'];
const MAX_PHOTO_SIDE = 480; // photos are shrunk so they fit in localStorage

// The add / edit form. It shows the error messages the model gives back.
class FormView extends View {
  constructor() {
    super('#disease-form');
    this.title = document.querySelector('#form-title');
    this.message = document.querySelector('#form-msg');
    this.submitBtn = this.root.querySelector('#submit-btn');
    this.cancelBtn = this.root.querySelector('#cancel-edit');
    this.submitHandler = () => {};
    this.cancelHandler = () => {};

    this.root.addEventListener('submit', async (event) => {
      event.preventDefault();
      this.submitHandler(await this.readForm());
    });
    this.cancelBtn.addEventListener('click', () => this.cancelHandler());
  }

  onSubmit(handler) { this.submitHandler = handler; }
  onCancel(handler) { this.cancelHandler = handler; }

  field(name) { return this.root.querySelector(`[name="${name}"]`); }

  setCategories(categories) {
    this.replace(this.field('category'),
      this.el('option', { value: '' }, 'Choose a cause type...'),
      categories.map((category) => this.el('option', { value: category }, category)));
  }

  async readForm() {
    const values = Object.fromEntries(FIELDS.map((name) => [name, this.field(name).value]));
    const [file] = this.field('image').files;
    return { ...values, image: file ? await this.shrinkPhoto(file) : null };
  }

  // Reads the chosen photo and returns a small JPEG as text (a data URL), or null if it can't be read
  shrinkPhoto(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onerror = () => resolve(null);
      reader.onload = () => {
        const img = new Image();
        img.onerror = () => resolve(null);
        img.onload = () => {
          const scale = Math.min(1, MAX_PHOTO_SIDE / Math.max(img.width, img.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(img.width * scale);
          canvas.height = Math.round(img.height * scale);
          canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Edit mode: put an existing disease into the form
  fill(disease) {
    const { prevention, treatment } = disease;
    FIELDS.forEach((name) => { this.field(name).value = disease[name]; });
    this.field('prevention').value = prevention.join('\n');
    this.field('treatment').value = treatment.join('\n');
    this.field('image').value = '';
    this.clearErrors();
    this.title.textContent = 'Edit disease';
    this.submitBtn.textContent = 'Update disease';
    this.cancelBtn.hidden = false;
    this.root.scrollIntoView({ behavior: 'smooth' });
  }

  // Add mode: empty form
  reset() {
    this.root.reset();
    this.clearErrors();
    this.title.textContent = 'Add a disease';
    this.submitBtn.textContent = 'Save disease';
    this.cancelBtn.hidden = true;
  }

  showErrors(errors) {
    this.clearErrors();
    const fieldErrors = Object.entries(errors).filter(([key]) => key !== '_form');
    fieldErrors.forEach(([key, text]) => {
      const input = this.field(key);
      input.classList.add('invalid');
      input.closest('.field').append(this.el('small', { class: 'error' }, text));
    });
    const count = fieldErrors.length;
    this.setMessage(errors._form ?? `Please fix ${count} field${count === 1 ? '' : 's'} below.`, 'err');
  }

  showSuccess(text) { this.setMessage(text, 'ok'); }

  clearErrors() {
    this.root.querySelectorAll('.error').forEach((node) => node.remove());
    this.root.querySelectorAll('.invalid').forEach((node) => node.classList.remove('invalid'));
    this.message.hidden = true;
  }

  setMessage(text, kind) {
    this.message.textContent = text;
    this.message.className = `message ${kind}`;
    this.message.hidden = false;
  }
}

export default new FormView();
