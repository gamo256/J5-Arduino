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

  digits.print("HELLO");

  // 輝度を50％設定
  digits.brightness(50);
});
