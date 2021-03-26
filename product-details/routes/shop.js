const express = require('express');
const path = require('path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    res.render('shop')
});

router.get('/show-product', (req, res, next) => {
    res.render('title', { prods: adminData.products });
});

module.exports = router;