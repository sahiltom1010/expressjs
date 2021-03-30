const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminData = require('./routes/admin');
const shop = require('./routes/shop');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shop);
app.use(adminData.router);
app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page Not Found !!</h1>');
})


const server = http.createServer(app);
server.listen(3000);

