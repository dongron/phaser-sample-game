import { player } from '../game/objects';
let cursors;

function update() {
  cursors = this.input.keyboard.createCursorKeys();
  setControll({ that: this, player });
}

const setControll = ({ that, player }) => {
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    // player.anims.play('left', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    // player.anims.play('right', true);
  } else {
    player.setVelocityX(0);
    // player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
};

function buildUpdate({} = {}) {
  return update;
}

export { buildUpdate };
