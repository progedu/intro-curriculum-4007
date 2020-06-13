'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200px', height: '200px' }, 2000);
  block.animate({ width: '100px', height: '100px' }, 2000);
});

movingButton.click(() => {
  block.animate({ marginLeft: '500px' }, 500);
  block.animate({ marginLeft: '20px' }, 1000);
});