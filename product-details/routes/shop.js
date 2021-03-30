const express = require('express');
const path = require('path');
const router = express.Router();

const shopcontroller = require('../controllers/products');

router.get('/',shopcontroller.getlist);

module.exports = router;