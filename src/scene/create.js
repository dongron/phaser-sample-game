import {
  platforms,
  player,
  stars,
  updatePlatforms,
  updatePlayer
} from '../game/objects';

function create() {
  createBackground(this);
  let _platforms = createPlatforms({ that: this, platforms });
  let _player = createPlayer({ that: this, player });
  let _stars = createStars({ that: this, stars });
  setColliders({
    that: this,
    player: _player,
    platforms: _platforms,
    stars: _stars
  });
  setOverlaps({ that: this, player: _player, stars: _stars });

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

const createStars = ({ that, stars }) => {
  stars = that.physics.add.group({
    key: 'logo',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 },
    setScale: { x: 0.2, y: 0.2 }
  });
  stars.children.iterate(function(child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });
  return stars;
};

const setColliders = ({ that, player, platforms, stars }) => {
  that.physics.add.collider(player, platforms);
  that.physics.add.collider(stars, platforms);
};

const setOverlaps = ({ that, player, stars }) => {
  that.physics.add.overlap(player, stars, collectStar, null, that);

  function collectStar (player, star) {
    console.warn('touch');
    star.disableBody(true, true);
  };
};

function buildCreate({}) {
  return create;
}

export { buildCreate };
