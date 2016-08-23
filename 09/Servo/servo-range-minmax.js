var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo({
    pin: 10,
    range: [ 45, 135 ]
  });

  // 45度に設定
  servo.min();

  this.wait(1000,function(){
    // 135度に設定
    servo.max();
  });
});
