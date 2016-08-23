var five = require("johnny-five");

// Boardオブジェクトを作成
// 通信用シリアルポートを自動的に認識
var board = new five.Board();

// ボードの準備ができたら
board.on("ready", function() {
  // 「Ready」と表示
  console.log("Ready!");
});