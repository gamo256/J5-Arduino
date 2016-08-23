var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Ledオブジェクトを作成(11ピンをLED制御用に設定)
  var led = new five.Led(11);

  // LEDを500ミリ秒間隔で点滅
  led.blink(500);

  // 10秒(10000ミリ秒)後に点滅動作を停止し、LEDをオフ(消灯)
  this.wait(10000, function() {
    led.stop().off();
  })
});