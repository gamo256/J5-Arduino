var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Ledオブジェクトを作成(6,5,3ピンをRGB LED制御用に設定)
  var led = new five.Led.RGB([6,5,3]);

  // LEDを500ミリ秒間隔で点滅
  led.blink(500);

  // 10秒(10000ミリ秒)後に点滅動作を停止し、LEDをオフ(消灯)
  this.wait(10000, function() {
    led.stop().off();
  });
});
