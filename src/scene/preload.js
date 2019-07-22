import Phaser from 'phaser';
import assets from '../assets';

function preload() {
  this.load.image('logo', assets.logoImg);
  this.load.image('player', assets.playerSprite);
  this.load.image('player-simple', assets.player);
  this.load.image('platform', assets.platformSprite);
  this.load.image('asteroid', assets.asteroid);
  this.load.image('sky', assets.sky);
}

export { preload };
