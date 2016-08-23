var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Relaysオブジェクトのコレクションを作成
  // (9,10ピンをリレー制御用に設定)
  var relays = new five.Relays([9,10]);

  // インデックス「0」(9ピン)のリレー回路を閉じる
  relays[0].close();
});