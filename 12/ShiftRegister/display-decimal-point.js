var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // ShiftRegisterオブジェクトを作成
  var register = new five.ShiftRegister([2, 3, 4]);

  var number = 0;

  this.loop(500, function() {
    // 小数点付で0～9の数字を表示
    register.display((number++) + ".")
    if (number > 9) {
      number = 0;
    }
  });
});