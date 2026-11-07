// ROUTES: connects URLs to controller functions
const express = require('express');
const controller = require('../controllers/diseaseController');
const { requireAdmin } = require('../middleware/auth');
const { uploadImage } = require('../middleware/upload');

const router = express.Router();

router.get('/diseases', controller.list);
router.post('/admin/check', requireAdmin, controller.checkAdmin);
router.post('/diseases', requireAdmin, uploadImage, controller.create);
router.put('/diseases/:id', requireAdmin, uploadImage, controller.update);
router.delete('/diseases/:id', requireAdmin, controller.remove);

module.exports = router;
