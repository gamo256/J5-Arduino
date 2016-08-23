var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // 10ピンをサーボ出力に設定
  this.pinMode(10, five.Pin.SERVO);

  // PWMの最小パルス幅を600ms、最大パルス幅を2200msに設定
  this.servoConfig(10, 600, 2200);

  // 90度の位置に回転させる値を出力
  this.servoWrite(10, 90);
});
