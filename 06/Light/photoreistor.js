var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Lightオブジェクトを作成
  // A0ピンをセンサー入力に設定
  var light = new five.Light("A0");

  // データを取得
  light.on("data", function() {
    console.log(this.level);
  });
});