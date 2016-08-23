var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Motorオブジェクトを作成
  var motor = new five.Motor([11, 12]);

  // 半分のスピードで正転
  motor.forward(128);

  // 5秒後
  this.wait(5000, function(){
    // 停止
    motor.stop()
  });

  // 10秒後
  this.wait(10000, function(){
    // 半分のスピードで正転を再開
    motor.start();
  });

  // 15秒後
  this.wait(15000, function(){
    // フルスピードで正転
    motor.start(255);
  });
});
