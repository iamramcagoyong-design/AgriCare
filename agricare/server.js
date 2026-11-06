// Entry point: only sets up and starts the app
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const diseaseRoutes = require('./routes/diseaseRoutes');
const { UPLOAD_DIR } = require('./middleware/upload');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', diseaseRoutes);

// Last-resort error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

fs.mkdir(UPLOAD_DIR, { recursive: true }).then(() => {
  app.listen(PORT, () => console.log(`AgriCare running at http://localhost:${PORT}`));
});
