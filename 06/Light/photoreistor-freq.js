var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Lightオブジェクトを作成
  // A0ピンをセンサー入力に設定
  var light = new five.Light( {
    pin: "A0",
    freq: 1000
  });

  // データを取得
  light.on("data", function() {
    console.log(this.level);
  });
});