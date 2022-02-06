const {fetchAll, fetchOneWithID, create} = require('../model/Product');
const {getFormData} = require('../utils/utils');
const asyncWrapper = require('../wrapper/asyncWrapper');


/**
 * @description     Gets all products stored in the JSON file
 * @route           GET /api/products
 */
const getAllProducts = asyncWrapper(
    async (req, res) => {
        const products = await fetchAll();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({"success": true, products}));
});

/**
 * @description     Gets a single product based on a specific ID
 * @route           GET /api/products/:id
 */
const getSpecificProduct = asyncWrapper(
    async (req, res) => {
        const destReqURL = req.url.split('/');
        const id = Number(destReqURL[destReqURL.length - 1]);

        const pdt = await fetchOneWithID(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({"success": true, "product": pdt}));
});

/**
 * @description     Creates a product and stores it in the JSON data file
 * @route           POST /api/products
 * 
 * Here is a link to the official NODE JS docs on how to get form data from POST request (Its helpful) -
 * https://nodejs.org/en/knowledge/HTTP/servers/how-to-read-POST-data/
 */
const insertProduct = asyncWrapper(
    async (req, res) => {
        const data = JSON.parse(await getFormData(req));
        // console.log(typeof(data));
        const pdt = await create(data);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({"success": true, "product": pdt}));
    }
);


module.exports = {
    getAllProducts,
    getSpecificProduct,
    insertProduct
}