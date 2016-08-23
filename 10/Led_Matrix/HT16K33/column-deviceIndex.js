var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led.Matrixオブジェクトを作成
  var matrix = new five.Led.Matrix({
    controller: "HT16K33"
  });

  // デバイス0の1列目を全点灯
  matrix.column(0, 2, 255);
});
