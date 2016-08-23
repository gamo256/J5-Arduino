var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // LM35の温度の計算式を指定
  var temperature = new five.Thermometer({
    pin: "A0",
    toCelsius: function(raw) {
      return (raw * 5 / 1024) *100
    }
  });

  // データを取得
  temperature.on("change", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
});
