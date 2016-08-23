var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // デジタルセンサーのSensorオブジェクトを作成
  // 2ピンをセンサー入力に設定
  var sensor = new five.Sensor.Digital(2);

  // センサー値を取得
  sensor.on("change", function(value) {
    console.log(value);
  });
});