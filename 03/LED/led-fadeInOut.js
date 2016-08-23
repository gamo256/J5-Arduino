var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Ledオブジェクトを作成(11ピンをLED制御用に設定)
  var led = new five.Led(11);

  // LEDを1000ミリ秒かけてフェードイン
  led.fadeIn(1000);

  // 5秒(5000ミリ秒)後に
  this.wait(5000, function() {
    // LEDを1000ミリ秒かけてフェードアウト
    led.fadeOut(1000);
  });
});