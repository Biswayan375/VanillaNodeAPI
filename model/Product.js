var products = require('../data/Products');
const {generateID, write} = require('../utils/utils');

const fetchAll = () => {
    return new Promise((resolve, reject) => {
        if (products) resolve(products);
        else reject(new Error('Data is not found!'));
    });
}

const fetchOneWithID = (id) => {
    return new Promise((resolve, reject) => {
        if (products) {
            products.forEach(pdt => {
                if (pdt.id === id) resolve(pdt);
            });
            resolve({});
        } else reject(new Error('Data is not found!'));
    });
}

const create = (pdt) => {
    return new Promise((resolve, reject) => {
        try {
            const id = generateID(products);
            const newPdt = {"id": id, ...pdt};
            products.push(newPdt);
            write(products)
                .then(resolve(newPdt))
                .catch(resolve({}));
        } catch (err) { reject(new Error("Cannot create.")); }
    });
}

module.exports = {
    fetchAll,
    fetchOneWithID,
    create
}