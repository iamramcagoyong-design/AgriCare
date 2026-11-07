// CONTROLLER (backend): receives requests, asks the model for data, sends responses.
const model = require('../models/diseaseModel');
const { deleteUpload } = require('../middleware/upload');

// Lets async handlers pass errors to Express
const wrap = (fn) => (req, res, next) => fn(req, res, next).catch(next);

exports.list = wrap(async (req, res) => {
  res.json(await model.getAll());
});

exports.checkAdmin = (req, res) => {
  res.json({ ok: true }); // requireAdmin already verified the password
};

exports.create = wrap(async (req, res) => {
  const image = req.file ? '/uploads/' + req.file.filename : null;
  const error = model.validate(req.body);
  if (error) {
    await deleteUpload(image); // don't keep an orphaned photo
    return res.status(400).json({ error });
  }
  const disease = await model.create(req.body, image);
  res.status(201).json(disease);
});

exports.update = wrap(async (req, res) => {
  const image = req.file ? '/uploads/' + req.file.filename : null;
  const error = model.validate(req.body);
  if (error) {
    await deleteUpload(image);
    return res.status(400).json({ error });
  }
  const result = await model.update(req.params.id, req.body, image);
  if (!result) {
    await deleteUpload(image);
    return res.status(404).json({ error: 'Not found' });
  }
  await deleteUpload(result.oldImage); // remove the replaced photo
  res.json(result.updated);
});

exports.remove = wrap(async (req, res) => {
  const removed = await model.remove(req.params.id);
  if (!removed) return res.status(404).json({ error: 'Not found' });
  await deleteUpload(removed.image);
  res.status(204).end();
});