var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Ledオブジェクトを作成(13ピンをLED制御用に設定)
  var led = new five.Led(13);

  // LEDをオン
  led.on();

  // 5秒(5000ミリ秒)後にLEDをオフ(消灯)
  this.wait(5000, function() {
    led.off();
  });

  // 10秒(10000ミリ秒)後に現在の状態を反転(この例ではLEDオン)
  this.wait(10000, function() {
    led.toggle();
  });
});