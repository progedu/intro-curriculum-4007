'use strict';
const $ = require('jquery');
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingbutton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '1000pt', height: '100pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingbutton.mouseover(() => {
  movingbutton.animate({ 'marginLeft': '500px' }, 500);
  movingbutton.animate({ 'marginLeft': '0px' }, 1000);
});