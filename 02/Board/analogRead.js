var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // A1ピンをアナログ入力に設定
  this.pinMode(1, five.Pin.ANALOG);

  // A1の入力値を読み取って表示する
  this.analogRead(1, function(voltage) {
    console.log(voltage);
  });
});
