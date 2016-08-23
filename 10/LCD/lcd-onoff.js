var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // LCDオブジェクトを作成
  var lcd = new five.LCD({
    // LCDピン名   RS  EN  DB4 DB5 DB6 DB7
    // Arduinoピン  7   8    9  10  11  12
    pins: [7, 8, 9, 10, 11, 12],
  });

  // ホーム(1行1列目)から「Hello！」と表示
  lcd.home().print("Hello!")
  // 5秒後
  this.wait(5000, function(){
    // 表示オフ
    lcd.off();
  });
  // 10秒後
  this.wait(10000, function(){
    // 表示オン
    lcd.on();
  });
  // 15秒後
  this.wait(14000, function(){
    // 表示クリア
    lcd.clear();
  });
});
