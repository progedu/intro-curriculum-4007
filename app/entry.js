'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px', 'border-radius': '80%', 'opacity': '0' }, 500);
  block.animate({ 'marginLeft': '20px', 'border-radius': '0%', 'opacity': '1' }, 1000);
});
