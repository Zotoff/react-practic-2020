const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

const user = require('./routes/user');
const book = require('./routes/book');

const app = express();

// CONNECT MONGOOSE
mongoose.connect(config.DATABASE,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users', user);
app.use('/api/books', book);

// PORT
const port = process.env.PORT || 3001;

// LISTENING
app.listen(port, ()=>{
    console.log(`Server is working on port ${port}`)
});

