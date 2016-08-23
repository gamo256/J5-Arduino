var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // IR.Reflect.Arrayオブジェクトを作成
  // A0、A1、A2ピンに反射型赤外線センサーを接続
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
