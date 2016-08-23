var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // ShiftRegisterオブジェクトを作成
  var register = new five.ShiftRegister({
    pins: {
      data: 2,
      clock: 3,
      latch: 4,
      reset: 9,
    }
  });


 setInterval(function() {
  register.reset();
 }, 200);
  // resetピンをHIGIにする

  // データを送信
  register.send(0xFF);
});