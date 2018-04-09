'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  scalingButton = $('#scaling-button');
const movingaButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingaButton.click(() => {
  block.animate({ 'marginLeft' : '500pt'}, 500);
  block.animate({ 'marginLeft' : '20pt'}, 1000);
});