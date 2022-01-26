const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const util = require('util')
const encoder = new util.TextEncoder('utf-8')

//Environment variable configuration
dotenv.config();

mongoose.connect(process.env.APIURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=> {
        // PORT and server initalization 
        const port = process.env.PORT || 8080;
        app.listen(port,()=>console.log(`Listening on port ${port}`));
    })
    .catch((err)=>{
        console.log(err);
    });

// # Importing and setting route #

const api = require('./routes/api');

app.use('/api',api);
