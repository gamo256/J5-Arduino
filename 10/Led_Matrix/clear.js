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
    // ���ׂĂ�LED�\����̕\�����N���A
    matrix.clear();
  });
});
