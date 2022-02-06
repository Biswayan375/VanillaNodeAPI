const http = require('http');
const route = require('./routes/route');
const port = 5000;

const server = http.createServer((req, res) => {
    route(req, res);
});

server.listen(port, () => console.log(`server is up on http://localhost:${port}`));