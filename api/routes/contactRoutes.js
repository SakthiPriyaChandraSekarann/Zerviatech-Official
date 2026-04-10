const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/contactController');

router.post('/send', submitForm);

module.exports = router;