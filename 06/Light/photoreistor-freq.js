var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Light�I�u�W�F�N�g���쐬
  // A0�s�����Z���T�[���͂ɐݒ�
  var light = new five.Light( {
    pin: "A0",
    freq: 1000
  });

  // �f�[�^���擾
  light.on("data", function() {
    console.log(this.level);
  });
});