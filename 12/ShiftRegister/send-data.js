var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // ShiftRegister�I�u�W�F�N�g���쐬
  var register = new five.ShiftRegister([2, 3, 4]);

  // �f�[�^�𑗐M
 setInterval(function() {
   register.send(0x11);
 }, 200);
});