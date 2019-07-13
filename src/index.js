import Phaser from 'phaser';
import { gameConfig } from './config';
import assets from './assets';
import { preload } from './scene/preload';
import { buildCreate } from './scene/create';
import { buildUpdate } from './scene/update';
import { buildRender } from './scene/render';

let player;
let platforms;
let cursors;
let jumpButton;

const scene = {
  preload,
  create: buildCreate({ player, platforms, cursors, jumpButton }),
  // update: buildUpdate({ game, player, jumpButton }),
  render: buildRender()
};

const game = new Phaser.Game({ ...gameConfig(), scene });
