var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Pinオブジェクトを作成(13ピンをデジタル入出力に設定)
  var pin = new five.Pin(13);

  // 13ピンの現在の状態を表示
  pin.query(function(state) {
    console.log(state);
  });
});