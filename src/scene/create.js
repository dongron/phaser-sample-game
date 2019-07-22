import {
  platforms,
  player,
  stars,
  updatePlatforms,
  updatePlayer,
  scoreText,
  bombs
} from '../game/objects';
import { score, gameOver, setGameOver } from '../game/gameplay';

function create() {
  createBackground(this);
  let _platforms = createPlatforms({ that: this, platforms });
  let _player = createPlayer({ that: this, player });
  let _stars = createStars({ that: this, stars });
  let _scoreText = createScoreText({ that: this, scoreText });
  let _bombs = createBombs({ that: this, bombs });
  setColliders({
    that: this,
    player: _player,
    platforms: _platforms,
    stars: _stars,
    bombs: _bombs,
    setGameOver
  });
  setOverlaps({
    that: this,
    player: _player,
    stars: _stars,
    scoreText: _scoreText,
    bombs: _bombs,
    score
  });

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

const setColliders = ({
  that,
  player,
  platforms,
  stars,
  bombs,
  setGameOver
}) => {
  that.physics.add.collider(player, platforms);
  that.physics.add.collider(stars, platforms);
  that.physics.add.collider(bombs, platforms);
  that.physics.add.collider(player, bombs, hitBomb, null, that);

  function hitBomb() {
    that.physics.pause();
    player.setTint(0xff0000);
    // player.anims.play('turn');
    setGameOver({ value: true, that });
  }
};

const setOverlaps = ({ that, player, stars, score, scoreText, bombs }) => {
  that.physics.add.overlap(player, stars, collectStar, null, that);

  function collectStar(player, star) {
    score += 1;
    scoreText.setText('Score: ' + score);
    star.disableBody(true, true);
    realeaseBomb();
  }

  function realeaseBomb() {
    if (stars.countActive(true) === 0) {
      stars.children.iterate(function(child) {
        child.enableBody(true, child.x, 0, true, true);
      });

      let x =
        player.x < 400
          ? Phaser.Math.Between(400, 800)
          : Phaser.Math.Between(0, 400);

      let bomb = bombs.create(x, 16, 'asteroid');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }
};

const createScoreText = ({ that, scoreText }) => {
  scoreText = that.add.text(16, 16, 'Score: 0', {
    fontSize: '32px',
    fill: '#000'
  });
  return scoreText;
};

const createBombs = ({ that, bombs }) => {
  bombs = that.physics.add.group();
  return bombs;
};

function buildCreate({}) {
  return create;
}

export { buildCreate };
