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

  // デバイス0の0桁目に「1」を表示
  digits.draw(0, 0, "1");
});
