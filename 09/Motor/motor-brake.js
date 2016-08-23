var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Motorオブジェクトを作成
  var motor =new five.Motor({
    pins: {
      pwm: 3,
      dir: 12,
      brake: 9
    }
  });

  motor.forward(255);

  // 5秒後
  this.wait(5000, function() {
    // ブレーキで停止
    motor.brake();
  });

  // 10秒後
  this.wait(10000, function() {
    // ブレーキを解除
    motor.release();
  });
});
