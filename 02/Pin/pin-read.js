var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Pinオブジェクトを作成
  // 13ピンをデジタル入出力に設定
  var pin = new five.Pin(13);

  // ピンの入力値を読み取って表示
  pin.read(function(error, value) {
    console.log(value);
  });

  /* または
  five.Pin.read(pin, function(error, value) {
    console.log(value);
  });
  */
});