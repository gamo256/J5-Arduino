var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Switchオブジェクトのコレクションを作成
  // (2,3,4ピンをトグルスイッチ入力用に設定)
  var toggle = new five.Switches([2,3,4]);

  toggle[0].on("close", function() {
    console.log("closed");
  });
  toggle[0].on("open", function() {
    console.log("open");
  });

  toggle[1].on("close", function() {
    console.log("closed");
  });
  toggle[1].on("open", function() {
    console.log("open");
  });

  toggle[2].on("close", function() {
    console.log("closed");
  });
  toggle[2].on("open", function() {
    console.log("open");
  });
});