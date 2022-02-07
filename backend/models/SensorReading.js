const mongoose = require('mongoose');

/* 
    Sensor data consists of sensor - sensor number (ie. 1,2,3...),
    value - ppm reading
    time - date + time of when the reading was collected
*/
const SensorReading = new mongoose.Schema({
    sensor: {type: Number, default: 1},
    value: {type: Number, default: 0},
    time: Date
},{
    versionKey:false
});

module.exports = mongoose.model('SensorReading', SensorReading);
