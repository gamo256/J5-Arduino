var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Keypadオブジェクトを作成
  var keypad = new five.Keypad({
    controller: "MPR121_KEYPAD",
    holdtime: 1000
  });

  // キーがホールドされた
  keypad.on("hold", function() {
    // メッセージ表示
    console.log( "Button hold");
  });
});
