// Small markup pieces shared by several views. They only build elements from the data they are given.
import { el } from './View.js';

export function photo({ name, plant, image }, className = 'thumb') {
  const placeholder = () => el('div', { class: 'placeholder' }, '🌿');
  if (!image) return placeholder();

  const img = el('img', { class: className, src: image, alt: `${name} on ${plant}`, loading: 'lazy' });
  img.addEventListener('error', () => img.replaceWith(placeholder())); // missing file -> leaf placeholder
  return img;
}

export const badges = ({ plant, category }, style) =>
  el('div', { class: 'meta', style }, el('span', { class: 'badge plant' }, plant), el('span', { class: 'badge' }, category));

export function infoSection(title, content) {
  const body = Array.isArray(content)
    ? el('ul', {}, content.map((line) => el('li', {}, line)))
    : el('p', {}, content);
  return el('div', { class: 'section' }, el('h4', {}, title), body);
}

export const dialogHead = (title, dialog) =>
  el('div', { class: 'dialog-head' },
    el('h2', {}, title),
    el('button', { class: 'btn secondary', type: 'button', on: { click: () => dialog.close() } }, 'Close'));
