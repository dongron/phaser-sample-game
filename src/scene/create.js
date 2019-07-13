let player, platforms, cursors, jumpButton;

function create() {
  createBackground(this);
  createPlatforms(this);
  // createPlayer(this);

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
  player = that.add.sprite(100, 200, 'player');
  that.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 500;
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
