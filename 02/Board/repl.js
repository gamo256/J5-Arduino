var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  this.repl.inject({
    // LedオブジェクトをREPLに登録
    led: new five.Led(13)
  });  
});
