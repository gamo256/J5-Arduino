var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Motor�I�u�W�F�N�g���쐬
  var motor =new five.Motor({
    pins: {
      pwm: 3,
      dir: 12
    },
    invertPWM: true
  });

  motor.forward(255);
});
