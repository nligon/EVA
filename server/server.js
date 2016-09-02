var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

require('./config/routes.js')(app, express);

app.use('/', function(req, res) {
  var url = 'https://api.api.ai/v1/query' + req.url;
  req.pipe(request(url)).pipe(res);
  console.log('res: ********', res);
});

app.listen(3001, function() {
  console.log('Example app listening on port 3000!');
});

app.use(express.static('../client'));

module.exports = app;
