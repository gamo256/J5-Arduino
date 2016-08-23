var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo({
    pin: 10,
    range: [ 40, 80]
  });

  // 60度に設定
  servo.center();
});
