var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Motorsオブジェクト(Motorオブジェクトのコレクション)を作成
  var motors =new five.Motors([
    {pins: { pwm: 3, dir: 12}},
    {pins: { pwm: 11, dir: 13}}
  ]);

  // インデックス「0」(3ピン)のモーターを正転
  motors[0].forward(255);
});
