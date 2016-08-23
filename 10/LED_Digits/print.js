var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led.Digitsオブジェクトを作成
  var digits = new five.Led.Digits({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    }
  });

  // 文字列を表示
  digits.print("HELLO");
});
