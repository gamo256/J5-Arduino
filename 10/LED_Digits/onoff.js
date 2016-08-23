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
    // 表示オフ
    digits.off();
  });
  // 10秒後
  this.wait(10000, function(){
    // 表示オン
    digits.on();
  });
});
