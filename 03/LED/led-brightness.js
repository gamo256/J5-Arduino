var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Ledオブジェクトを作成(11ピンをLED制御用に設定)
  var led = new five.Led(11);

  // 明るさを100に設定
  led.brightness(100);
});
