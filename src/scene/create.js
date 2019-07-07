function create() {
  this.add.image(400, 300, 'sky');
  player = this.add.sprite(100, 200, 'player');
  this.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 500;

  platforms = game.add.physicsGroup();
  platforms.create(500, 150, 'platform');
  platforms.create(-200, 300, 'platform');
  platforms.create(400, 450, 'platform');
  platforms.setAll('body.immovable', true);

  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function buildCreate({ player, platforms, cursors, jumpButton } = {}) {
  return create;
}

export { buildCreate };
