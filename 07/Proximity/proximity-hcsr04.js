var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Proximityオブジェクトを作成
  // 7ピンを超音波距離センサー(HCSR04)のデータ取得用に設定
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7
  });

  // データを取得して距離を表示
  proximity.on("data", function() {
    console.log("Proximity: ");
    console.log("  cm  : ", this.cm);
    console.log("  in  : ", this.in);
    console.log("-----------------");
  });

  // 「change」イベント:障害物が変更されたときに発生する
  proximity.on("change", function() {
    console.log("The obstruction has moved.");
  });
});