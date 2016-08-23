var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // アナログセンサーのSensorオブジェクトのコレクションを作成
  var sensor = new five.Sensors(["A0", "A1", "A2"]);

  // A0に接続されているセンサーのデータを取得
  sensor[0].on("data", function(value) {
    console.log(value);
  });
  // A1に接続されているセンサーのデータを取得
  sensor[1].on("data", function(value) {
    console.log(value);
  });
  // A2に接続されているセンサーのデータを取得
  sensor[2].on("data", function(value) {
    console.log(value);
  });
});