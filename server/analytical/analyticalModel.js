var mongoose = require('mongoose');

var analyticalSchema = new mongoose.Schema({
  form : {
    question : String,
    answer : String,
    email : email 
  }
});

var analytical = mongoose.model('analytical', analyticalSchema);
module.exports = analytical;