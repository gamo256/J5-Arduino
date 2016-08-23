var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // 各LEDのLedオブジェクトを作成
  var ledA = new five.Led(9);
  var ledB = new five.Led(10);
  var ledC = new five.Led(11);

  // Ledsオブジェクトを作成
  var leds = new five.Leds([ledA, ledB, ledC]);

  // 9、10ピンのLEDの明るさを設定
  ledA.brightness(20);
  ledB.brightness(255);

  // すべてLEDにパルスを出力
  leds.pulse();
});
