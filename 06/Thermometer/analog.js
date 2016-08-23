var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Thermometerオブジェクトを作成
  // 使用温度センサーIC　LM35
  // データ入力端子 A0 
  var temperature = new five.Thermometer({
    pin: "A0",
    toCelsius: function(raw) {
      return (raw / sensivity) + offset;
    }
  });

  // データを取得
  temperature.on("change", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
});
