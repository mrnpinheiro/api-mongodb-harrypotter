const express = require('express');
const app = express();
const cors = require('cors')

const database = require('./models/repository')
database.connect()

const potter = require('./routes/potter-routes');

app.use(cors());
app.use(express.json());
app.use('/', potter);

module.exports = app;
