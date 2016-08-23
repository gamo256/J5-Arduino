var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Motor�I�u�W�F�N�g���쐬
  var motor =new five.Motor({
    pins: {
      pwm: 3,
      dir: 12,
      brake: 9
    }
  });

  motor.forward(255);

  // 5�b��
  this.wait(5000, function() {
    // �u���[�L�Œ�~
    motor.brake();
  });

  // 10�b��
  this.wait(10000, function() {
    // �u���[�L������
    motor.release();
  });
});
