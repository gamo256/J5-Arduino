var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // LCDオブジェクトを作成
  var lcd = new five.LCD({
    // LCDピン名   RS  EN  DB4 DB5 DB6 DB7
    // Arduinoピン  7   8    9  10  11  12
    pins: [7, 8, 9, 10, 11, 12],
  });

  // 1行1列目にカーソルを移動
  lcd.home();
  // 「Hello!」と表示
  lcd.print("Hello!");
});
