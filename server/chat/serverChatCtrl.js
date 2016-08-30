module.exports = {
  
  sendMsg: function (req, res, next) {
    var myFunc = function(obj){
      console.log(obj);
    }
    myFunc({})
    .then(function(message){
      res.json(message);
    })
    .fail(function (error) {
      next(error);
    })
  }
  
}