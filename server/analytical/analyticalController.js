var Analytical = require('./analyticalModel.js');

module.exports = {
  
  insertAnalytical : function (req, res) {
    var get = req.body;
    Analytical.findOne({email : get.email})
    .exec(function (error, Analytical) {
      if(Analytical){
        res.json('Analytical already exist !!');
      }else {
        var newAnalytical = new Analytical({
          question : get.question,
          answer : get.answer,
          email : get.email
        });
        newAnalytical.save(function(err, newAnalytical){
          if(err){
            res.status(500).send(err);
          }else{
            res.status(200).send(newAnalytical);
          }
        });
      }      
    });
  },
  
  getAnalytical : function(req, res){
   Analytical.find().exec(function (err,allUsers) {
      if(err){
        res.status(500).send(err);
      }else{
        res.json(allUsers);
      }
    });
  }

}
