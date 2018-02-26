'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const  movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ width: '20pt'}, 500);
  block.animate({ width: '100pt'}, 50);
  block.animate({'marginLeft': '500px' }, 200);
  block.animate({'marginLeft': '20px'}, 200);
  block.animate({ width: '20pt'}, 80);
  block.animate({ width: '100pt'}, 500);
});