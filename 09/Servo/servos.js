var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servosオブジェクト(Servoオブジェクトのコレクション)を作成
  // (10,11ピンをサーボモーター制御用に設定)
  var servos = new five.Servos([10,11]);

  // すべてののサーボモーターをスイープ
  servos.sweep();
});
