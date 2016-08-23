var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.on();

  // [Ctrl]+[C]で中断したときにLEDを消灯
  this.on("exit", function() {
    led.off();
  });
});