var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Piezoオブジェクトを作成
  // (3ピンを信号出力用に設定)
  var piezo = new five.Piezo(3);

  // 曲を再生
  piezo.play({
    // 曲の配列(第1引数:コード、第2引数:ビート)
    song: [
      ["C4", 1 / 4],
      ["D4", 1 / 2],
      [null, 1],
      ["F4", 1],
    ],
    tempo: 100
  });
});