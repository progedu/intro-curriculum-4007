'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  scalingButton = $('#scaling-button');
const  movingButton = $('#moving-button');
const  toCircleButton = $('#circle-button');
const  toTransparentButton = $('#transparent-button');


scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});
movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' },500);
  block.animate({ 'marginLeft': '20px' },1000);
});
toCircleButton.click(() => {
  block.animate({ 'border-radius': '50pt' },2000);
  block.animate({ 'border-radius': '0pt' },2000);
});
toTransparentButton.click(() => {
  block.animate({ 'opacity': '0' },1000);
  block.animate({ 'opacity': '1' },1000);
});