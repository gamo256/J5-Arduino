var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Ledオブジェクトを作成
  var led = new five.Led(13);

  this.repl.inject({
    // LEDをオン/オフするメソッドを登録
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    }
  });
});
