var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Keypadオブジェクトを作成
  var keypad = new five.Keypad({
    pin: "A0",
    length: 16
  });

  // キーが押されたら
  keypad.on("press", function(event) {
    // キーの値を表示
    console.log("Which button?", event.which);
  });
});
