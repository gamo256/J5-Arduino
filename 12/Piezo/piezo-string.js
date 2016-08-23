var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Piezoオブジェクトを作成
  // (3ピンを信号出力用に設定)
  var piezo = new five.Piezo(3);

  // 文字列表現で曲を設定
  piezo.play({
    song: "C4 D4 D4 - - - - F4 F4 F4 F4",
    beats: 1 / 4,
    tempo: 100
  });
});