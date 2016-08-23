var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Pinオブジェクトを作成
  // 9ピンをPWM出力に設定
  var pin = new five.Pin({
    pin: 9,
    mode: five.Pin.PWM,
  });

  // pinオブジェクトの状態を確認
  pin.query(function(state) {
    console.log(state);
  });
});