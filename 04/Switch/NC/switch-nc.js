var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Switchオブジェクトを作成(8ピンをトグルスイッチ入力用に設定)
  var toggle = new five.Switch({
    pin:8,
    type: "NC"
  });

  toggle.on("close", function() {
    console.log("closed");
  });

  toggle.on("open", function() {
    console.log("open");
  });
});