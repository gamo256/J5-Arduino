var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // 10�s�����T�[�{�o�͂ɐݒ�
  this.pinMode(10, five.Pin.SERVO);

  // 90�x�̈ʒu�ɉ�]������l���o��
  this.servoWrite(10, 90);
});
