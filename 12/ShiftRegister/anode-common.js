var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // ShiftRegister�I�u�W�F�N�g���쐬
  var register =new five.ShiftRegister({
    isAnode: true,
    pins: [2, 3, 4]
  });

  var number = 0;

  this.loop(500, function() {
    // 0�`9�̐�����\��
    register.display(number++)
    if (number > 9) {
      number = 0;
    }
  });
});