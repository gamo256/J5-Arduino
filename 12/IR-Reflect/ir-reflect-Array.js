var five = require("johnny-five")
var board = new five.Board();

board.on("ready", function() {

  // IR.Reflect.Array�I�u�W�F�N�g���쐬
  var eyes = new five.IR.Reflect.Array({
    emitter: 13,
    pins: ["A0", "A1", "A2"],
    freq: 25
  });

  // �f�[�^���擾
  eyes.on('data', function() {
    console.log( "Raw Values: ", this.raw );
  });

  eyes.on('line', function() {
    console.log( "Line Position: ", this.line);
  });

  eyes.enable();
});
