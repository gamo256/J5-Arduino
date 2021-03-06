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
    cuePoints: [0, 0.25, 0.75 , 1],
    keyFrames:[90, { value: 0, easing: "outQuad" }, 90,  { value: 180, easing: "outQuad" }],
    loop: true
  });

  // 5秒後
  this.wait(5000,function(){
    // 一時停止
    animation.pause();
  });

  // 10秒後
  this.wait(10000,function(){
    // 再生(再開)
    animation.play();
  });

  // 15秒後
  this.wait(15000,function(){
    // 再生(再開)
    animation.stop();
  });
});