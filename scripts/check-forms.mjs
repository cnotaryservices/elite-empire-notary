// Static and runtime checks for the buildless Forms & Downloads page.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root = path.resolve(import.meta.dirname, '..');
const page = fs.readFileSync(path.join(root, 'forms.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'docs/forms-files.json'), 'utf8'));
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
const links = [...page.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/g)].map(m => ({...attrs(m[0].split('>')[0]), html: m[0]}));
const pdfLinks = links.filter(a => a.href.endsWith('.pdf'));
assert.equal(Object.keys(manifest).length, 7);
assert.equal(pdfLinks.length, 14);
for (const [file, info] of Object.entries(manifest)) {
  const bytes = fs.readFileSync(path.join(root, 'public/forms', file));
  assert.equal(bytes.subarray(0, 5).toString(), '%PDF-');
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), info.sha256, file);
  const pair = pdfLinks.filter(a => a.href === `public/forms/${file}`);
  assert.equal(pair.length, 2, file);
  const view = pair.find(a => a.target === '_blank');
  assert.ok(view?.rel.includes('noopener') && view.rel.includes('noreferrer'), file);
  const download = pair.find(a => a.download);
  assert.ok(download?.download.startsWith('elite-empire-') && download.download.endsWith('.pdf'), file);
  assert.ok(view.html.includes('formsNewTab') && download.html.includes('formsTitle'), file);
}
for (const a of links) {
  if (/^(https?:|tel:|mailto:)/.test(a.href)) continue;
  const [file, anchor] = a.href.split('#');
  const target = file ? path.join(root, file) : path.join(root, 'forms.html');
  assert.ok(fs.existsSync(target), a.href);
  if (anchor) assert.ok(fs.readFileSync(target, 'utf8').includes(`id="${anchor}"`), a.href);
  assert.ok(!a.html.includes('tabindex="-1"'), a.href);
}
const ids = [...page.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size);
assert.ok(!/<(?:form|input|textarea|iframe)\b/i.test(page), 'No collection/upload interface');
assert.ok(!page.includes('formspree.io') && !page.includes('paypal.com') && !page.includes('calendly.com'));
for (const file of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  assert.ok((text.match(/href="forms.html"/g) || []).length >= 2, file);
}
// Execute the actual shared script with a small DOM fixture. This tests language
// and menu behavior without claiming to emulate browser layout or keyboard input.
class Element {
  constructor(key) {
    this.dataset = key ? {i18n: key} : {};
    this.listeners = {}; this.attributes = {}; this.textContent = '';
    const classes = new Set();
    this.classList = {
      add: c => classes.add(c), remove: c => classes.delete(c), contains: c => classes.has(c),
      toggle(c, force) { const on = force ?? !classes.has(c); on ? classes.add(c) : classes.delete(c); return on; },
    };
  }
  addEventListener(type, handler) { this.listeners[type] = handler; }
  setAttribute(key, value) { this.attributes[key] = value; }
}
const nodes = [...page.matchAll(/data-i18n="([^"]+)"/g)].map(m => new Element(m[1]));
const controls = Object.fromEntries(['.menu-toggle', '.site-header', '.nav', '.lang-toggle'].map(k => [k, new Element()]));
const document = {
  documentElement: {}, body: new Element(), addEventListener() {},
  querySelector: s => controls[s] ?? null,
  querySelectorAll: s => s === '[data-i18n]' ? nodes : [],
};
const context = vm.createContext({document, window: {scrollY: 0, addEventListener() {}}, HTMLAnchorElement: Element});
vm.runInContext(script, context);
for (const language of ['en', 'es', 'en']) {
  if (document.documentElement.lang !== language) controls['.lang-toggle'].listeners.click();
  assert.equal(document.documentElement.lang, language);
  const dictionary = vm.runInContext(`translations.${language}`, context);
  for (const node of nodes) assert.equal(node.textContent, dictionary[node.dataset.i18n], `${language}: ${node.dataset.i18n}`);
  assert.equal(controls['.lang-toggle'].textContent, language === 'en' ? 'ES' : 'EN');
}
controls['.menu-toggle'].listeners.click();
assert.equal(controls['.menu-toggle'].attributes['aria-expanded'], 'true');
controls['.nav'].listeners.click({target: new Element()});
assert.equal(controls['.menu-toggle'].attributes['aria-expanded'], 'false');
console.log('PASS: 7 unchanged PDFs; 14 view/download links; local targets; EN/ES toggle; mobile-menu behavior; no collection UI.');
