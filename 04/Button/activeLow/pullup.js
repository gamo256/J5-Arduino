var five = require("johnny-five");
vara board = new five.Board();

board.on("ready", function() {

  // Buttonオブジェクトを作成(2ピンをボタン入力用に設定)
  // アクティブLowに設定し、ボタン入力ピンをプルアップ
  var button = new five.Button({
    pin: 2, 
    invert: true,
    isPullup: true
  });

  button.on("down", function() {
    console.log("down");
  });

  button.on("hold", function() {
    console.log("hold");
  });

  button.on("up", function() {
    console.log("up");
  });
});