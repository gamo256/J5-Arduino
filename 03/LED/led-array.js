var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Ledsオブジェクトを作成
  // (9,10,11ピンをLED制御用に設定)
  var leds = new five.Leds([9, 10, 11]);

  // パルスを出力
  leds.pulse();
});
