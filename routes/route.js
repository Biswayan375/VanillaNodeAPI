const {getAllProducts, getSpecificProduct, insertProduct} = require('../controllers/controller');

const route = (req, res) => {
    /**
     * GET requests
     */
    if (req.url === '/NodeAPI/products' && req.method === 'GET') { getAllProducts(req, res); }
    else if (req.url.match(/\/NodeAPI\/products\/([0-9]+)/) && req.method === 'GET') { getSpecificProduct(req, res); }

    /**
     * POST requests
     */
    else if (req.url === '/NodeAPI/products' && req.method === 'POST') { insertProduct(req, res); }
    
    else {
        res.writeHead(404, { "Content-Type": "html" });
        res.end(`<h2 style="color: red">404 Not Found</h2>`);
    }
}

module.exports = route;