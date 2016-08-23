var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var state = 0;

  this.pinMode(13, five.Pin.OUTPUT);

  // 500ミリ秒間隔で処理(LEDの点灯/消灯)を繰り返す
  this.loop(500, function() {
    board.digitalWrite(13, (state ^= 1));
  });
});