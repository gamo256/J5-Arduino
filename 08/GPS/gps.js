var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // GPSオブジェクトを作成
  var gps = new five.GPS([11, 10]);

  // 経度、緯度を取得
  gps.on("change", function() {
    console.log("position");
    console.log("  latitude   : ", this.latitude);
    console.log("  longitude  : ", this.longitude);
    console.log("--------------------------------------");
  });
});
