var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // デジタルのPinオブジェクトを作成
  var pin = new five.Pin(13);

  // オブジェクト形式
  // var pin = new five.Pin({pin: 13});

  var state = 0x00;
  this.loop(500, function() {
    pin.write(state ^= 0x01);
  });
});