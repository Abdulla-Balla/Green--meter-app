const express = require('express');
const app = express();
const router = express.Router();

// #Sends the main page#
router.get('/',(req,res)=>{
    res.render('index');
});

module.exports = router;