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

  // 文字を表示
  matrix.draw("G");

  // 明るさ(輝度)を50%に設定
  matrix.brightness(50);
});
