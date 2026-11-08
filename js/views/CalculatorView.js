import View from './View.js';

// Disease incidence calculator: shows the result the model computes.
class CalculatorView extends View {
  constructor() {
    super('#calculator');
    this.infected = this.root.querySelector('#infected');
    this.total = this.root.querySelector('#total');
    this.result = this.root.querySelector('#calc-result');
    this.inputHandler = () => {};

    [this.infected, this.total].forEach((input) =>
      input.addEventListener('input', () => this.inputHandler({ infected: this.infected.value, total: this.total.value })));
  }

  onInput(handler) { this.inputHandler = handler; }

  // Fills the boxes once at start (for example with the numbers saved last time)
  setInputs({ infected, total }) {
    this.infected.value = infected;
    this.total.value = total;
  }

  render(result) {
    if (!result.valid) {
      this.replace(this.result, this.el('p', { class: 'muted' }, result.message));
      return;
    }
    const { percent, infected, total, healthy, level, advice } = result;
    const fill = this.el('div', { class: `bar-fill level-${level.toLowerCase()}` });
    fill.style.width = `${Math.min(percent, 100)}%`;

    this.replace(this.result,
      this.el('p', { class: 'big' }, `${percent.toFixed(1)}% of your plants are infected`),
      this.el('span', { class: `level level-${level.toLowerCase()}` }, `${level} incidence`),
      this.el('div', { class: 'bar' }, fill),
      this.el('p', {}, `${infected} infected, ${healthy} healthy, ${total} plants in total.`),
      this.el('p', { class: 'advice' }, advice));
  }
}

export default new CalculatorView();
