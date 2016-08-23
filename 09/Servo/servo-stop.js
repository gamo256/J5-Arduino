var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo(10);

  // サーボモーターをスイープ
  servo.sweep();

  // 5秒後に
  this.wait(5000,function(){
    // サーボモーターを停止
    servo.stop()
  });
});
