var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Ledオブジェクトを作成(6,5,3ピンをRGB LED制御用に設定)
  var led = new five.Led.RGB([6,5,3]);

  // 明るさの強度を30%に設定
  led.intensity(30);
});
