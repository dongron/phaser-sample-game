import Phaser from 'phaser';
import { gameConfig } from './config';
import assets from './assets';
import { preload } from './scene/preload';
import { buildCreate } from './scene/create';
import { buildUpdate } from './scene/update';
import { buildRender } from './scene/render';

let cursors;
let jumpButton;

const scene = {
  preload,
  create: buildCreate({}),
  update: buildUpdate({ game, jumpButton }),
  render: buildRender()
};

const game = new Phaser.Game({ ...gameConfig(), scene });
