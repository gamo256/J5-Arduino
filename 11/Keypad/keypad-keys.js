var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Keypad�I�u�W�F�N�g���쐬
  var keypad = new five.Keypad({
    controller: "MPR121_KEYPAD",
    keys: [
      ["!", "@", "#"],
      ["$", "%", "^"],
      ["&", "-", "+"],
      ["_", "=", ":"]
    ]
  });

  // �L�[�������ꂽ��
  keypad.on("press", function(event) {
    // �L�[�̒l��\��
    console.log("Which button?", event.which);
  });
});