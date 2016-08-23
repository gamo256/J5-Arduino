var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servosオブジェクト(Servoオブジェクトのコレクション)を作成
  // (10,11ピンをサーボモーター制御用に設定)
  var servos = new five.Servos([10,11]);

  // 10ピン(インデックス「0」)のサーボモーターを180度回転
  servos[0].to(180);
});
