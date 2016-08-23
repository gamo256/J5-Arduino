var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // IR.Reflect.Array�I�u�W�F�N�g���쐬
  // A0�AA1�AA2�s���ɔ��ˌ^�ԊO���Z���T�[��ڑ�
  var eyes = new five.IR.Reflect.Array({
    emitter: 13,
    pins: ["A0"],
    freq: 25
  });

  eyes.on('data', function() {
    console.log( "Raw Values: ", this[0].raw );
  });

  eyes.on('line', function() {
    console.log( "Line Position: ", this[0].line);
  });

  eyes.enable();
});
