var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Servoオブジェクトを作成
  // (10ピンをサーボモーター制御用に設定)
  var servo = new five.Servo(10);

  // Animationオブジェクトを作成
  var animation = new five.Animation(servo);

  // アニメーションの設定
  animation.enqueue({
    cuePoints: [0, 0.25, 0.75, 1],
    keyFrames: [90, { value: 180, easing: "inQuad" }, { value: 0, easing: "outQuad" }, 90],
    duration: 2000
  });
});