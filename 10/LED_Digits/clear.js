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

  // 5秒後
  this.wait(5000, function(){
    // すべてのLED表示器の表示をクリア
    digits.clear();
  });
});
