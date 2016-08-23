var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Thermometerオブジェクトを作成
  // 使用温度センサーIC TMP36
  // データ入力端子 A0 
  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  // データを取得
  temperature.on("change", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
});
