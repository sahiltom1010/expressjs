const path = require('path');
const fs = require('fs');

module.exports=class Product{
    constructor(title) {
        this.title = title;
    }
    save() {
        const place = path.join(__dirname, '..', 'data', 'carts.json');
        fs.readFile(place, (err, datain) => {
            let products = [];
            if (!err) {
                products = JSON.parse(datain);
             }
                
                products.push(this);
                fs.writeFile(place, JSON.stringify(products), (err) => {
                    console.log(err);
                });
        });

    }
    static fetchall() {
        return products;
    }
}