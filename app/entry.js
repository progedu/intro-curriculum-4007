'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const round = $('#round');
const opacity = $('#opacity');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});
movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});
round.click(() => {
  block.animate({borderRadius: '50%'}, 2000);
  block.animate({borderRadius: '0%'}, 1000);
})
opacity.click(() => {
  block.animate({ 'opacity': 0},1000);
  block.animate({ 'opacity': 1},1000);
})
