var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Ledオブジェクトを作成(11ピンをLED制御用に設定)
  var led = new five.Led(11);

  // 500msかけてLEDを徐々にオフ
  led.pulse(500);
});
