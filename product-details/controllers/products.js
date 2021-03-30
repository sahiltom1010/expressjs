const Product = require('../models/Product');

exports.getaddproduct = (req, res, next) => {
    res.render('add-product')
}

exports.postaddproduct=(req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getlist = (req, res, next) => {
    
    const products = Product.fetchall();
    res.render('shop', {prods : products});
}