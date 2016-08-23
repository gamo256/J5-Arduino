var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // アクティブLOWのButtonオブジェクトを作成
  // (2ピンをボタン入力用に設定)
  var button = new five.Button({
    pin: 2, 
    invert: true
  });

  // 「down」イベント:ボタンが押されたとき(オン)に発生
  button.on("down", function() {
    console.log("down");
  });

  // 「hold」イベント: 一定時間(規定値は500ms)ボタンが押され続けたときに発生
  button.on("hold", function() {
    console.log("hold");
  });

  // 「up」イベント： ボタンが解放されたとき(オンからオフ時)に発生
  button.on("up", function() {
    console.log("up");
  });
});