const express = require('express');
const router = express.Router();
const SensorReading = require('../models/SensorReading')
const bodyParser

// # Get response for sensors #
// This gets a single, most recent reading that matches the search parameter
router.get('/reading/:sensor', (req,res)=>{
    console.log("Recieved request");
    SensorReading.findOne({sensor:req.params.sensor}).sort({time: -1}).limit(1).exec(
        (err,docs)=>{
            if(err){
                console.log(err);
            }
            res.json(docs);
        });
});
// This gets collection of readings that matches the search parameters
router.get('/reading/:sensor/:start/:end', (req,res)=>{
    console.log("Recieved request");
    //Searches for corresponding sensor number within the selected time range
    SensorReading.find({
        sensor: req.params.sensor, 
        time:{
            $gte: new Date(new Date(req.params.start).setUTCHours(0,0,0)),
            $lte: new Date(new Date(req.params.end).setHours(23,59,59))
        }
    },(err,docs)=>{
        if(err){
            console.log(err);
        }
        res.json(docs);
    });
});


//# Post request for updating sensor values # 
router.post('/reading/:sensor', (req,res)=>{
    const reading = new SensorReading({
        sensor: req.params.sensor,
        value: req.params.value,
        // time: new Date(2021,06,1,3,12,17,0)
        // time: new Date(req.params.time)
    });
    console.log(req.body.time)
    console.log(req.body.value)
    // reading.save()
    // .then((result)=>{
    //     res.json(result);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // });
});


module.exports = router;