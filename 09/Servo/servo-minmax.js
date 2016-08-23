var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo(10);

  // 0度に設定
  servo.min();

  this.wait(1000,function(){
    // 180度に設定
    servo.max();
  });
});
