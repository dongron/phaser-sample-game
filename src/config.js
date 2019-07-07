import Phaser from 'phaser';

const gameConfig = () => ({
  type: Phaser.AUTO,
  // parent: 'phaser-example',
  width: 800,
  height: 600
  // scene: {
  //   preload,
  //   create,
  //   update,
  //   render
  // }
  // physics: {
  //   default: 'arcade',
  //   arcade: {
  //     gravity: { y: 200 }
  //   }
  // }
});

export { gameConfig };
