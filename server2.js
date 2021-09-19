'use strict'

const express = require('express');
var cors = require('cors');

//Constants
const PORT = 3001;
const HOST = '0.0.0.0';

//App
const app = express();
app.use(cors());
app.get('/', (req, res)=> {
	res.send('Welcome to instance 2 of node\n');
})
app.get('/node', (req, res)=> {
	res.status(200).send('Path was being taken into acount lmao\n');
})
app.listen(PORT, HOST);
console.log(`Running on ${HOST}:${PORT}`);
