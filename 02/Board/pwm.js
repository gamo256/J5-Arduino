var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // 9ピンをアナログ出力(PWM出力)に設定
  this.pinMode(9, five.Pin.PWM);

  // 9ピンにアナログ値255を出力
  this.analogWrite(9, 255);
});
