var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Sensorオブジェクトを作成
  var sensor = new five.Sensor("A0");

  // データが50～150範囲内ならメッセージを表示
  sensor.within([50, 150], function() {
    console.log("In a range");
  });
});
