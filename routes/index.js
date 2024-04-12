const express = require('express');
const router = express.Router();
const itemsRoutes = require('./itemsRoutes');

router.use('/items', itemsRoutes);

module.exports = router;