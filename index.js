const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var memberController = require('./controllers/memberController.js')

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server strated at port: 3000'));

app.use('/tjmembers', memberController);