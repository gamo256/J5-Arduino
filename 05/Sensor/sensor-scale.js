var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Sensorオブジェクトを作成
  var potentiometer = new five.Sensor("A0");

  // ポテンショメーターの位置に応じて0～180の値を出力
  potentiometer.on("change", function() {
    console.log(this.scaleTo(0,180));
  });
});
