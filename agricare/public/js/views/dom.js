// Small helpers shared by all views. Text is never treated as HTML (safe from XSS).
export function el(tag, props = {}, ...kids) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') node.className = v;
    else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  node.append(...kids.flat().filter((x) => x != null));
  return node;
}

export function imageOrPlaceholder(d, cls = 'thumb') {
  return d.image
    ? el('img', { class: cls, src: d.image, alt: `${d.name} on ${d.plant}`, loading: 'lazy' })
    : el('div', { class: 'placeholder' }, '🌿');
}

export function badges(d, extraStyle = '') {
  return el('div', { class: 'meta', style: extraStyle },
    el('span', { class: 'badge plant' }, d.plant),
    el('span', { class: 'badge' }, d.category)
  );
}

export function section(title, content) {
  const body = Array.isArray(content)
    ? el('ul', {}, content.map((t) => el('li', {}, t)))
    : el('p', {}, content);
  return el('div', { class: 'section' }, el('h4', {}, title), body);
}

export function dialogHead(title, dlg) {
  return el('div', { class: 'dialog-head' },
    el('h2', {}, title),
    el('button', { class: 'btn secondary', onclick: () => dlg.close() }, 'Close')
  );
}

export function enableBackdropClose(dlg) {
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
}
