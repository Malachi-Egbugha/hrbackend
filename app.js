const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const connectdb = require('./config/db');
const cors = require('cors');
const app = express();
require('dotenv').config();
mongoose.Promise = global.Promise;
connectdb();

//middleware
//app.use(morgan('dev'));
app.use(cors());
//Body Parser
app.use(express.json());
//Cookie Parser
app.use(cookieParser());

//routes
app.use('/api', require('./routes/auth'));
app.use('/user', require('./routes/user'));
app.use('/leave', require('./routes/leave'));


//Start the server
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Server listening at ${port}`);