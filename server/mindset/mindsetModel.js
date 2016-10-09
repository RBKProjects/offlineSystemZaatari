var mongoose = require('mongoose');

var mindsetSchema = new mongoose.Schema({
  form : {
    question : String,
    answer : String 
  }
});

var mindset = mongoose.model('mindset', mindsetSchema);
module.exports = mindset;