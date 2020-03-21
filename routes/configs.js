const express = require('express');
const { getConfig, updateConfig } = require('../controllers/configs');

const router = express.Router();

router.get('/', getConfig);
router.put('/', updateConfig);

module.exports = router;
