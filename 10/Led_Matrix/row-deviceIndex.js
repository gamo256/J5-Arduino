var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led.Matrix�I�u�W�F�N�g���쐬
  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    }
  });

  // �f�o�C�X0��2�s�ڂ�S�_��
  matrix.row(0, 1, 255);
});
