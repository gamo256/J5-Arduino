var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Motors�I�u�W�F�N�g(Motor�I�u�W�F�N�g�̃R���N�V����)���쐬
  var motors =new five.Motors([
    {pins: { pwm: 3, dir: 12}},
    {pins: { pwm: 11, dir: 13}}
  ]);

  // �C���f�b�N�X�u0�v(3�s��)�̃��[�^�[�𐳓]
  motors[0].forward(255);
});
