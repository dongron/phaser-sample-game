import Phaser from 'phaser';
import { gameConfig } from './config';
import assets from './assets';
import { preload } from './scene/preload';
import { buildCreate } from './scene/create';
import { buildUpdate } from './scene/update';
import { buildRender } from './scene/render';
import { gameOver, setGameOver } from './game/gameplay';

let cursors;
let jumpButton;
let game, that;

const scene = {
  preload,
  create: buildCreate({}),
  update: buildUpdate({ game, jumpButton }),
  render: buildRender()
};

function initGame() {
  game = new Phaser.Game({ ...gameConfig(), scene }) || {};
}
initGame();
