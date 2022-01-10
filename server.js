const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Environment variable configuration
dotenv.config();

mongoose.connect(process.env.APIURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=> {
        // PORT and server initalization 
        const port = process.env.PORT || 3001;
        app.listen(port,()=>console.log(`Listening on port ${port}`));
    })
    .catch((err)=>{
        console.log(err);
    });

// # Importing and setting routes #
const index = require('./routes/index');
const api = require('./routes/api');
app.use('/',index);
app.use('/api',api);

app.set('view engine','pug');
app.set('views','./views');