var Candidate = require('./CandidateModel.js');

module.exports = {
  
  insertCandidateInfo : function (req, res) {
    var get = req.body;
    Candidate.findOne({email : get.email})
    .exec(function (error, candidate) {
      if(candidate){
        res.json('candidate already exist !!');
      }else {
        var newCandidate = new Candidate({
          firstName : get.firstName,
          lastName : get.lastName,
          gender : get.gender,
          email : get.email,
          phone : get.phone,
          programmingExp : get.programmingExp,
          birthdate : get.birthdate,
          educationLevel : get.educationLevel,
          englishLevel : get.englishLevel,
          otherTrainning : get.otherTrainning
        });
        newCandidate.save(function(err, newCandidate){
          if(err){
            res.status(500).send(err);
          }else{
            res.status(200).send(newCandidate);
          }
        });
      }      
    });
  },
  
  getUser : function(req, res){
    Candidate.findOne({email : req.body.email }, function(err, candidate){
      if(err){
        res.status(500).send(err);
      }else{
        res.json(candidate);
      }
    })
  },

  getUsers : function(req, res){
    Candidate.find().exec(function (err,allUsers) {
      if(err){
        res.status(500).send(err);
      }else{
        res.json(allUsers);
      }
    });
  }

}
