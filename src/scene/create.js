import {
  platforms,
  player,
  updatePlatforms,
  updatePlayer
} from '../game/objects';

function create() {
  createBackground(this);
  let _platforms = createPlatforms({ that: this, platforms });
  let _player = createPlayer({ that: this, player });
  setColliders({ that: this, player: _player, platforms: _platforms });

  updatePlatforms(_platforms);
  updatePlayer(_player);
}

const createBackground = that => {
  that.add.image(400, 300, 'sky');
};

const createPlatforms = ({ that, platforms }) => {
  platforms = that.physics.add.staticGroup();
  platforms
    .create(400, 568, 'platform')
    .setScale(2)
    .refreshBody();
  platforms.create(600, 400, 'platform');
  platforms.create(50, 250, 'platform');
  platforms.create(750, 220, 'platform');
  return platforms;
};

const createPlayer = ({ that, player }) => {
  player = that.physics.add.sprite(100, 100, 'player-simple');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  //todo: fix player sprite
  return player;
  that.anims.create({
    key: 'left',
    frames: that.anims.generateFrameNumbers('player-sprite', {
      start: 0,
      end: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  that.anims.create({
    key: 'turn',
    frames: [{ key: 'player-sprite', frame: 4 }],
    frameRate: 20
  });
  that.anims.create({
    key: 'right',
    frames: that.anims.generateFrameNumbers('player-sprite', {
      start: 5,
      end: 8
    }),
    frameRate: 10,
    repeat: -1
  });
};

const setColliders = ({ that, player, platforms }) => {
  that.physics.add.collider(player, platforms);
};

function buildCreate({}) {
  return create;
}

export { buildCreate };
