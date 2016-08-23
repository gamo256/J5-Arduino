var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo(10);
  // 180度に設定
  servo.max();
  
  this.wait(1000, function(){
    // 90度に設定
    servo.center();
  });

  this.wait(2000, function(){
    servo.max();
  });

  this.wait(3000, function(){
    // 2000ミリ秒かけてセンターに設定
    servo.center (2000);
  });

  this.wait(8000, function(){
    servo.max();
  });

  this.wait(10000, function(){
    // 1000ミリ秒、5ステップでセンターに設定
    servo.center(1000,5);
  });
});
