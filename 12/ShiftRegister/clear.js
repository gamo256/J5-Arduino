var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // ShiftRegisterオブジェクトを作成
  var register = new five.ShiftRegister([2, 3, 4]);

  // データを送信
  register.send(0xFF);
  // 5秒後
  this.wait(5000, function(){
    // シフトレジスタをクリア
    register.clear();
  });
});