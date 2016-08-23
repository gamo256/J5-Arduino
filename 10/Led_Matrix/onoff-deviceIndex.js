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

  matrix.draw("G");

  // 5�b��
  this.wait(5000, function(){
    // �f�o�C�X0�̕\�����I�t
    matrix.off(0);
  });
  // 10�b��
  this.wait(10000, function(){
    // �f�o�C�X0�̕\�����I��
    matrix.on(0);
  });
});