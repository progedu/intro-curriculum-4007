'use strict';
/* import dc from 'damage-calc';
import crypto from 'crypto';
const root = document.getElementById('root');
root.innerHTML = '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、'
  + dc.effectiveDamage(100, 50, 30) + '</p><p>'
  + crypto.randomBytes(8).toString('hex') + '</p>'; */

import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt'}, 2000);
  block.animate({ width: '100pt', height: '100pt'}, 2000);
});

movingButton.click(() => {
  block.animate( { 'marginLeft': '500px'}, 500);
  block.animate( { 'marginLeft': '20px'}, 1000);
});