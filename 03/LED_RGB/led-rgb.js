var five = require("johnny-five");

five.Board().on("ready", function() {

  // Ledオブジェクトを作成(6,5,3ピンをRGB LED制御用に設定)
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  //LEDを点灯
  led.on();

});
