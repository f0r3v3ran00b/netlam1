'use strict';
var path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
var vicesRouter = require('../routes/vices');
const router = express.Router();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
console.log(`path is ${path.join(__dirname, '..', 'views')}`)
app.set('view engine', 'pug');
app.use('/.netlify/functions/server', vicesRouter); // path must route to lambda


// Start Server Now...
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
module.exports.handler = serverless(app);
