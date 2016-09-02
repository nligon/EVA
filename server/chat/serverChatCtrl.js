module.exports = {
  
  sendMsg: function (req, res, next) {
    var myFunc = function(obj){
      console.log('I am myFunc');
      // console.log(obj);
    };

    // myFunc(
    //   console.log('myFunc launched');
    // )
    // .then(function(message){
    //   console.log('post myFunc hit');
    //   // res.json(message);
    // })
    // .fail(function (error) {
    //   next(error);
    // })
    
  }
  
}