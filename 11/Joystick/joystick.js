var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Joystickオブジェクトを作成
  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"]
  });

  // データを取得
  joystick.on("change", function() {
    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);
    console.log("--------------------------------------");
  });
});
