var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Led.Digits�I�u�W�F�N�g���쐬
  var digits = new five.Led.Digits({
     controller: "HT16K33"
  });

  // 0���ڂɁu1�v��\��
  digits.draw(0, "1");
});