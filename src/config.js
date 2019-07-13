import Phaser from 'phaser';

const gameConfig = () => ({
  type: Phaser.AUTO,
  // parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
},
});

export { gameConfig };
