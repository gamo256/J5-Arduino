var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo({
    pin: 10, 
    type: "continuous"
  });

  // フルスピードで時計回りに回転
  servo.cw(1);

  this.wait(5000,function(){
    //フルスピードで反時計回りに回転
    servo.ccw(1);
  });
});
