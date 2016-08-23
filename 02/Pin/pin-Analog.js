var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // アナログ入力のPinオブジェクトを作成
  var pin = new five.Pin("A0");

  // オブジェクト形式
  // var pin = new five.Pin({pin: "A0"});

  pin.read(function(error, value) {
    console.log(value);
  });
});