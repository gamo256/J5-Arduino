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

  // LEDを点灯
  led.on();
});

