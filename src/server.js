'use strict'; 

//DEPENDENCIES 
const express = require('express');
const cors = require('cors');

const app = express();

//MIDDLEWARE
app.use(express.json);
app.use(cors);

//ENDPOINTS
app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});