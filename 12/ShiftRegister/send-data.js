var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // ShiftRegisterオブジェクトを作成
  var register = new five.ShiftRegister([2, 3, 4]);

  // データを送信
 setInterval(function() {
   register.send(0x11);
 }, 200);
});