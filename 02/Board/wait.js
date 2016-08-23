var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // 13ピンをデジタル出力に設定
  this.pinMode(13, five.Pin.OUTPUT);

  // 13ピンをオン(HIGHを出力)
  this.digitalWrite(13, 1);

  // 1000ミリ秒後に13ピンをオフ(LOWを出力)
  this.wait(1000, function() {
    board.digitalWrite(13, 0);
  });
});