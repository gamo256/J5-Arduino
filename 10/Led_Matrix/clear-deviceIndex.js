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

  matrix.draw("G");

  // 5秒後
  this.wait(5000, function(){
    // デバイス0の表示をクリア
    matrix.clear(0);
  });
});
