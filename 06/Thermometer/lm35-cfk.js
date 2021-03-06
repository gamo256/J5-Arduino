var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Thermometerオブジェクトを作成
  // 使用温度センサーIC LM35
  // データ入力端子 A0 
  var temperature = new five.Thermometer({
    controller: "LM35",
    pin: "A0"
  });

  // データを取得
  temperature.on("change", function() {
    console.log("celsius: %d", this.celsius);
    console.log("fahrenheit: %d", this.fahrenheit);
    console.log("kelvin: %d", this.kelvin);
    /* または
    console.log("celsius: %d", this.C);
    console.log("fahrenheit: %d", this.F);
    console.log("kelvin: %d", this.K);
    */
  });
});
