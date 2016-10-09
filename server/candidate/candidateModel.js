var mongoose = require('mongoose');
var EnglishTest = require();
var Mindset = require();
var Analytical = require(); 

var CandidateSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  },
  gender : {
    type : String
  },
  email : {
    type : String,
    required : true
  },
  phone : {
    type : String,
  },
  birthdate : {
    type : Date
  },
  programmingExp : {
    type : Boolean  
  },
  educationLevel : {
    type : String
  },
  englishLevel : {
    type : String
  },
  otherTrainning : {
    type : String
  },
  mindset : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Mindset'
  }],
  englishTest : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'EnglishTest'
  }],
  analytical : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Analytical'
  }]
});

var Candidate = mongoose.model('Candidate', CandidateSchema);
module.exports = Candidate;