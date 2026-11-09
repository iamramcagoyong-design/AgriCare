// Base class for every view.
// NOTE: this is a stand-in written for this project. If your Week 5 View.js has different
// method names, swap this file for yours and rename the calls (this.el, this.replace, ...).

// Builds one element:  el('div', { class: 'card', on: { click: fn } }, child1, 'some text')
export function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (key === 'on') {
      Object.entries(value).forEach(([event, handler]) => node.addEventListener(event, handler));
    } else if (typeof value === 'boolean') {
      if (value) node.setAttribute(key, '');
    } else if (value != null) {
      node.setAttribute(key === 'class' ? 'class' : key, value);
    }
  }
  node.append(...children.flat().filter((child) => child != null && child !== false));
  return node;
}

export default class View {
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
    if (!this.root) throw new Error(`${this.constructor.name}: element ${rootSelector} not found`);
  }

  el(tag, props, ...children) {
    return el(tag, props, ...children);
  }

  // Replaces everything inside a node with new children
  replace(node, ...children) {
    node.replaceChildren(...children.flat().filter((child) => child != null && child !== false));
  }

  show() { this.root.hidden = false; }
  hide() { this.root.hidden = true; }

  render() {
    throw new Error(`${this.constructor.name} must implement render()`);
  }
}
