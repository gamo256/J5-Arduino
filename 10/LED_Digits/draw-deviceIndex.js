var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led.Digits�I�u�W�F�N�g���쐬
  var digits = new five.Led.Digits({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    }
  });

  // �f�o�C�X0��0���ڂɁu1�v��\��
  digits.draw(0, 0, "1");
});
