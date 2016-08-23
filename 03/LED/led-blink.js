var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Ledオブジェクトを作成(13ピンをLED制御用に設定)
  var led = new five.Led(13);

  // LEDを500ミリ秒間隔で点滅
  led.blink(500);
});