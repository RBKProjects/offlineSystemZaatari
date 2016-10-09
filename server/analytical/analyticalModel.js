var mongoose = require('mongoose');

var AnalyticalSchema = new mongoose.Schema({
  form : {
    question : String,
    answer : String,
    email : String 
  }
});

var Analytical = mongoose.model('Analytical', AnalyticalSchema);
module.exports = Analytical;