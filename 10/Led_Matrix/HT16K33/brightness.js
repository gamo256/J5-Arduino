var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led.Matrix�I�u�W�F�N�g���쐬
  var matrix = new five.Led.Matrix({
    controller: "HT16K33"
  });

  // ������\��
  matrix.draw("G");

  // ���邳(�P�x)��50%�ɐݒ�
  matrix.brightness(50);
});