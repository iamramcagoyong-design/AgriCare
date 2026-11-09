import View from './View.js';

// Draws the tab buttons and shows only the active panel.
class TabView extends View {
  constructor() {
    super('#tabs');
    this.changeHandler = () => {};
  }

  onTabChange(handler) { this.changeHandler = handler; }

  render({ tabs, active }) {
    const buttons = tabs.map(({ id, label }) =>
      this.el('button', {
        class: id === active ? 'tab active' : 'tab',
        type: 'button',
        'aria-pressed': String(id === active),
        on: { click: () => this.changeHandler(id) },
      }, label));
    this.replace(this.root, buttons);

    document.querySelectorAll('[data-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.panel !== active;
    });
  }
}

export default new TabView();
