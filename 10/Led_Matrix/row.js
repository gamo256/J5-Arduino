var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led.Matrixオブジェクトを作成
  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    }
  });

  // 2行目を全点灯
  matrix.row(1, 255);
});
