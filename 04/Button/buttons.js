var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Buttonオブジェクトのコレクションを作成(2,3,4ピンをボタン入力用に設定)
  var button = new five.Buttons([2,3,4]);


  button[0].on("down", function() {
    console.log("buton0 down");
  });
  button[0].on("hold", function() {
    console.log("buton0 hold");
  });
  button[0].on("up", function() {
    console.log("buton0 up");
  });

  button[1].on("down", function() {
    console.log("buton1 down");
  });
  button[1].on("hold", function() {
    console.log("buton1 hold");
  });
  button[1].on("up", function() {
    console.log("buton1 up");
  });

  button[2].on("down", function() {
    console.log("buton2 down");
  });
  button[2].on("hold", function() {
    console.log("buton2 hold");
  });
  button[2].on("up", function() {
    console.log("buton2 up");
  });
});