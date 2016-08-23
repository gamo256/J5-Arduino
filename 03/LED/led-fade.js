var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Ledオブジェクトを作成(11ピンをLED制御用に設定)
  var led = new five.Led(11);

  // LEDを2000ミリ秒かけて明るさ128までフェードイン
  led.fade(128, 2000);
});