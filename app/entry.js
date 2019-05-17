'use strict';
import $ from 'jquery';
const block = $('#block');
const movingButton = $('#moving-button');
const scalingButton = $('#scaling-button');
scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});
movingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt','marginLeft': '500px' }, 500);
  block.animate({ width: '100pt', height: '100pt','marginLeft': '20px'}, 1000);
});
