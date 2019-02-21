const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { mongoURI } = require('./config/keys.js');

const app = express();

const port = process.env.PORT || 8000;

// MiddleWare
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB -- Commented out until DB is created

// mongoose
//   .connect(mongoURI)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

app.use('/', express.static(path.join(__dirname, './client/dist')));

app.listen(port, () => console.log(`Server doin it's thing on port ${port}...`));
