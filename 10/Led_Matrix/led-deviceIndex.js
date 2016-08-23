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

  // デバイス0の2行3列目のドットを点灯
  matrix.led(0, 1, 2, 1);
});
