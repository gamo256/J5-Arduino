var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // 9ピンをデジタル入力に設定
  this.pinMode(9, five.Pin.INPUT);

  // 9ピンのデジタル入力値を読み取って表示
  this.digitalRead(9, function(value) {
    console.log(value);
  });
});
