// Simple admin check. CHANGE THE PASSWORD before sharing the site!
// Run with:  ADMIN_PASSWORD=yourpassword npm start
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'agricare123';

function requireAdmin(req, res, next) {
  if (req.get('x-admin-password') !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Wrong admin password' });
  }
  next();
}

module.exports = { requireAdmin };
