var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // アナログセンサーのSensorオブジェクトを作成
  // しきい値を100に設定
  var sensor = new five.Sensor({
    pin: "A0",
    threshold: 100
  });

  // センサー値を取得
  sensor.on("data", function(value) {
    console.log(value);
  });
});