var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Piezoオブジェクトを作成
  // (3ピンを信号出力用に設定)
  var piezo = new five.Piezo(3);

  // D4を1秒間再生
  piezo.frequency(587, 1000);
});