var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led.Matrix�I�u�W�F�N�g���쐬
  var matrix = new five.Led.Matrix({
    controller: "HT16K33"
  });

  // �f�o�C�X0��2�s3��ڂ̃h�b�g��_��
  matrix.led(0, 1, 2, 1);
});