// MODEL (admin page): talks to the API using the admin password.
export class AdminModel {
  constructor() {
    this.password = sessionStorage.getItem('agricare-admin') || '';
  }

  get headers() {
    return { 'x-admin-password': this.password };
  }

  async login(password) {
    const res = await fetch('/api/admin/check', { method: 'POST', headers: { 'x-admin-password': password } });
    if (!res.ok) return false;
    this.password = password;
    sessionStorage.setItem('agricare-admin', password);
    return true;
  }

  async list() {
    return (await fetch('/api/diseases')).json();
  }

  async add(formData) {
    const res = await fetch('/api/diseases', { method: 'POST', headers: this.headers, body: formData });
    const data = await res.json().catch(() => ({}));
    return res.ok ? { ok: true } : { ok: false, error: data.error || 'Something went wrong' };
  }

  async remove(id) {
    await fetch('/api/diseases/' + id, { method: 'DELETE', headers: this.headers });
  }
}
