'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const banishButton = $('#banish-button');


scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});
movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 2000);
  block.animate({ 'marginLeft': '20px' }, 2000);
});
banishButton.click(() => {
  block.animate({'opacity':0}, 300, 'swing');
});
