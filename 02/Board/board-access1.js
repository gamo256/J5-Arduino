var five = require("johnny-five");

// IDが「A」と「B」の2つのボードを含むBoardsオブジェクトを作成
var boards = new five.Boards(["A", "B"]);

boards.on("ready", function() {
  // Boardsオブジェクトの各ボードを順に参照
  this.each(function(board) {
    // IDが「B」だったら
    if (board.id === "B") {
       // ledオブジェクトを作成
       // (ボード「B」の13ピンをLED制御用に使用)
      var led = new five.Led({
        pin: 13,
        board: board
      });
      // ボード「B」の13ピンに接続されているLEDを点滅
      led.blink();
    }
  });
});