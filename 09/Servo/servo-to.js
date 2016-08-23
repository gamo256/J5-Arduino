var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo(10);

  // 0度の位置に動かす
  servo.to(0);

  this.wait(1000,function(){
    // 2000ミリ秒かけて90度の位置まで動かす
    servo.to(90,2000);
  });

  this.wait(5000,function(){
    // 1000ミリ秒、5ステップで180度の位置まで動かす
    servo.to(180,1000,5);
  });
});
