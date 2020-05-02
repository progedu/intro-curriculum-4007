'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingbutton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingbutton.click(() => {
  block.animate({ 'marginLeft' : '500pt' }, 500);
  block.animate({ 'marginLeft': '20pt' }, 1000);
});
