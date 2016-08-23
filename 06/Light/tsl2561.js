var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Light�I�u�W�F�N�g���쐬
  // A0�s�����Z���T�[���͂ɐݒ�
  var light = new five.Light({
    controller: "TSL2561"
  });

  // �f�[�^���擾
  light.on("change", function() {
    console.log(this.level);
  });
});