var five = require("johnny-five");

// IDが「A」と「B」の2つのボードを含むBoardsオブジェクトを作成
var boards = new five.Boards(["A", "B"]);

// ボードの準備ができたら
boards.on("ready", function(){
  // Boardsオブジェクトの各ボードを順に参照
  this.each(function(board) {
    // 各ボードの13ピンに接続されているLEDを点滅
     new five.Led({pin: 13, board: board}).strobe();
  });
});
