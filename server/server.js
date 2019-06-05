const express = require ("express");

const server = express();3

server.use(express.static('./public'));

module.exports = server; 