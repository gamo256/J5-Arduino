var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Motor�I�u�W�F�N�g���쐬
  var motor = new five.Motor([3, 12]);

  // �����̃X�s�[�h�Ő��]
  motor.forward(128);

  // 5�b��
  this.wait(5000, function(){
    // �t���X�s�[�h�ŋt�]
    motor.rev(255);
  });
});
