var five = require("johnny-five");

// オプションを指定してBoardオブジェクトを作成
var board = new five.Board({ 
  port: "COM10",
  repl: false,
  debug: false,
  timeout: 20
});

// ボードの準備ができたら
board.on("ready", function() {
  // 「Ready」と表示
  console.log("Ready!");
});