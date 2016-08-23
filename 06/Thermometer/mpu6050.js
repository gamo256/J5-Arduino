var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Thermometerオブジェクトを作成
  // 使用温度センサーIC MPU6050
  var temperature = new five.Thermometer({
    controller: "MPU6050"
  });

  // データを取得
  temperature.on("change", function() {
    console.log("temperature");
    console.log("  celsius      : ", this.celsius);
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("  kelvin       : ", this.kelvin);
    console.log("--------------------------------------");
  });
});