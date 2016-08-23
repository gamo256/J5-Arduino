var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo(10);

  // 45～135度の範囲を1000ミリ秒かけて、10ステップでスイープ
  servo.sweep({
    range: [45, 135], 
    interval: 1000,
    step: 10
  });
});
