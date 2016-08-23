var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Sensorオブジェクトを作成
  var sensor = new five.Sensor("A0");

  // 真偽のしきい値を100に設定
  sensor.booleanAt(100);

  sensor.on("change", function() {
    console.log(this.boolean);
    console.log(this.value);
  });
});