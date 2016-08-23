var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // 13ピンをデジタル出力に設定
  this.pinMode(13, five.Pin.OUTPUT);

  // 13ピンにHIGH(1)を出力
  this.digitalWrite(13, 1);
});
