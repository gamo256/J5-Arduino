var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // アナログ入力A0をデジタル入出力として使う
  // Pinオブジェクトを作成
  var pin = new five.Pin({
    pin: 14,
    type: "digital"
  });

  var state = 0x00;

  this.loop(500, function() {
    pin.write(state ^= 0x01);
  });
});