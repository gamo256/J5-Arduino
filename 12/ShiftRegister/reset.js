var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // ShiftRegister�I�u�W�F�N�g���쐬
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
  // reset�s����HIGI�ɂ���

  // �f�[�^�𑗐M
  register.send(0xFF);
});