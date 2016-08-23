var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // RGB LEDの初期化(3,5,6ピンをRGB LED制御用に設定)
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });
  var index = 0;
  // カラーパターンの定義
  var rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];
  // 1秒間隔で色を切り替える
  this.loop(1000, function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    }
    led.color(rainbow[index++]);
  });
});