let player, platforms, cursors, jumpButton;

function create() {
  createBackground(this);
  createPlatforms(this);
  createPlayer(this);

  // cursors = game.input.keyboard.createCursorKeys();
  // jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

const createBackground = that => {
  that.add.image(400, 300, 'sky');
};

const createPlatforms = that => {
  platforms = that.physics.add.staticGroup();
  platforms
    .create(400, 568, 'platform')
    .setScale(2)
    .refreshBody();
  platforms.create(600, 400, 'platform');
  platforms.create(50, 250, 'platform');
  platforms.create(750, 220, 'platform');
};

const createPlayer = that => {
  player = that.physics.add.sprite(100, 100, 'player-simple');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  //todo: fix player sprite
  return;
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

  // that.physics.arcade.enable(player);
  // player.body.collideWorldBounds = true;
  // player.body.gravity.y = 500;
};

function buildCreate({
  player: _player,
  platforms: _platforms,
  cursors: _cursors,
  jumpButton: _jumpButton
} = {}) {
  player = _player;
  platforms = _platforms;
  cursors = _cursors;
  jumpButton = _jumpButton;
  return create;
}

export { buildCreate };
