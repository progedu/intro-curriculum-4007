'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  scalingButton = $('#scaling-button');
const  movingButton = $('#moving-button');
const  boltButton = $('#bolt-button');
const  defaultButton = $('#default-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

boltButton.click(() => {
  block.animate({ 'marginLeft': '1181px' }, 95);
});

defaultButton.click(() => {
  block.animate({ 'marginLeft': '20px' }, 0);
});