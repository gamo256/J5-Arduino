var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo(10);

  // 45～135の範囲でサーボモーターをスイープ
  servo.sweep([45,135]);
});
