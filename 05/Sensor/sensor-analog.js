var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // アナログセンサーのSensorオブジェクトを作成
  // A0ピンをセンサー入力に設定
  var sensor = new five.Sensor("A0");

  // センサー値を取得
  sensor.on("change", function(value) {
    console.log(value);
  });
});