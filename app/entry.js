'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const rotateButton = $('#rotate-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.on('click', () => {
  block.animate({'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

rotateButton.on('click', () => {
  block.animete({ transform: 'rotate(360deg)' }, 200);
});