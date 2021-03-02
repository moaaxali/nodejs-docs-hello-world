const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Automated Node.js deployments with Azure Pipelines");
});

app.get('/greet/:me', (req, res) => {
    res.send(`Hello! ${me}`);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
