var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Switchオブジェクトを作成(8ピンをトグルスイッチ入力用に設定)
  var toggle = new five.Switch({
    pin:8,
    type: "NO"
  });

  // 「closed」イベント：スイッチを閉じたときに発生
  //  NO(既定)の場合は入力がLOW、NCの場合は入力がHIGHになったとき
  toggle.on("close", function() {
    console.log("closed");
  });

  // 「open」イベント：スイッチを解放されたときに発生(既定)
  //  NO(既定)の場合は入力がHIGH、NCの場合は入力がLOWになったとき
  toggle.on("open", function() {
    console.log("open");
  });
});