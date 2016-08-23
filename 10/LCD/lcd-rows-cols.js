var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // 4×20のLCDオブジェクトを作成
  var lcd = new five.LCD({
    pins: [7, 8, 9, 10, 11, 12],
    rows: 4,
    cols: 20
  });
});

