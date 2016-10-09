var mongoose = require('mongoose');

var englishTestlSchema = new mongoose.Schema({
  form : {
    question : String,
    answer : String 
  }
});

var englishTest = mongoose.model('englishTest', englishTestlSchema);
module.exports = englishTest;