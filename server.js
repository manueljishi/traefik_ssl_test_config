'use strict'

const express = require('express');
const axios = require('axios');

//Constants
const PORT = 3000;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/', (req, res)=> {
	res.send('Welcome to instance 1 of Node\n');
	console.log(`${process.env['BACKEND']}node`);
	axios.get(`${process.env['BACKEND']}node`)
	.then(res => {
		console.log(res.status);
		console.log(res.data)
	})
	.catch(err => {
		console.log(err);
	})
})

app.listen(PORT, HOST);
console.log(`Running on ${HOST}:${PORT}`);
