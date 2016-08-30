var serverChatCtrl = require('../chat/serverChatCtrl.js')

module.exports = function (app, express) {
  app.post('/chat', serverChatCtrl.sendMsg);
}