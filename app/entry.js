'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

scalingButton.click(() => {
  block.animate({ width: '700pt', height: '200pt', 'opacity': '0' }, 2000);
  block.animate({ width: '10pt', height: '100pt', 'opacity': '1' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px'}, 1000);
});