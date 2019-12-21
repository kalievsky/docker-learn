const express = require('express');
const http = require('http');
const httpProxy = require('http-proxy');

const app = express();
const proxyBackend = httpProxy.createProxyServer({ target: 'http://back' });
const proxyFrontend = httpProxy.createProxyServer({ target: 'http://frontend:3000', ws: true });
const server = http.createServer(app);

app.use('/api', (req, res) => {
  proxyBackend.web(req, res, {});
});

app.use('*', (req, res) => {
  req.url = req.originalUrl;
  proxyFrontend.web(req, res, {});
});

server.on('upgrade', (req, socket, head) => {
  proxyFrontend.ws(req, socket, head);
});

server.listen(80);
