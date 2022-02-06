const fs = require('fs');
const path = require('path');

const generateID = (JSONdata) => { 
    if (JSONdata) return JSONdata.length + 1;
    return 0;
}

const write = async (JSONdata) => {
    const filePath = path.join(__dirname, '../data/Products.json');
    fs.writeFile(filePath, JSON.stringify(JSONdata), (err) => {throw new Error()});
}

const getFormData = async (req) => {
    var data = '';
    req.on('data', (chunk) => { data += chunk; });
    await req.on('end', () => data);
    return data
}

module.exports = {
    generateID,
    write,
    getFormData
}