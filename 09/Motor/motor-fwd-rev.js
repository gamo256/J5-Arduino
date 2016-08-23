var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Motorオブジェクトを作成
  var motor = new five.Motor([3, 12]);

  // 半分のスピードで正転
  motor.forward(128);

  // 5秒後
  this.wait(5000, function(){
    // フルスピードで逆転
    motor.rev(255);
  });
});
