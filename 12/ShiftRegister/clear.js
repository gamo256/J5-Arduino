var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // ShiftRegister�I�u�W�F�N�g���쐬
  var register = new five.ShiftRegister([2, 3, 4]);

  // �f�[�^�𑗐M
  register.send(0xFF);
  // 5�b��
  this.wait(5000, function(){
    // �V�t�g���W�X�^���N���A
    register.clear();
  });
});