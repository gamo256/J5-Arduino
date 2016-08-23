var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // アナログセンサーのSensorオブジェクトを作成
  // 読み取り間隔を1000ミリ秒に設定
  var sensor = new five.Sensor({
    pin: "A0",
    freq: 1000
  });

  // センサー値を取得
  sensor.on("data", function(value) {
    console.log(value);
  });
});