const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();
app.get('/:radius', (req, res, next) => {
    var n = parseInt(req.url.substring(1));
    var st = n.toString();
    if (st == req.url.substring(1)) {
        console.log("is int");
        next()
    }
    else console.log("is string");
})

app.get('/:radius', (req, res, next) => {
    var n = parseInt(req.url.substring(1));
    let area = 3.14 * n * n;
    console.log("Area of circle is = "+ area );
})
const server = http.createServer(app);
server.listen(3010);
