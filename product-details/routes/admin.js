const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/products')

router.get('/add-product',controller.getaddproduct);

router.post('/add-product',controller.postaddproduct);

exports.router = router;