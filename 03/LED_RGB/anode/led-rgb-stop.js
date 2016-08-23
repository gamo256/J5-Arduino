var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // アノードコモンのLedオブジェクトを作成(3,5,6ピンをRGB LED制御用に設定)
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    },
    isAnode: true
  });

  // LEDを500ミリ秒間隔で点滅
  led.blink(500);

  // 10秒(10000ミリ秒)後に点滅動作を停止し、LEDをオフ(消灯)
  this.wait(10000, function() {
    led.stop().off();
  });
});
