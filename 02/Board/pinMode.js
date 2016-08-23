var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // 13ピンをデジタル入力に設定
  this.pinMode(13, five.Pin.INPUT);
});
