var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Pinオブジェクトを作成
  // 13ピンをデジタル入出力に設定
  var pin = new five.Pin(13);

  // HIGH(1)を出力
  pin.high();

  this.wait(1000, function() {
    // LOW(0)を出力
     pin.low();
  });
 
  this.wait(2000, function() {
    // HIGH(1)を出力
    pin.write(1);
    // または
    //five.Pin.write(pin, 1);
  });

  this.wait(3000, function() {
    // HIGH(1)を出力
     pin.write(0);
    // または
    //five.Pin.write(pin, 0);
  });
});