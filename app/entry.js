'use strict';
import $ from 'jquery';
const block = $('#block');
const block2 = $('#block2');
const block3 = $('#block3');
const scalingButton = $('#scaling-button');
const movingButton = $('moving-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block2.animate({ 'marginLeft': '500px' }, 2000);
  block2.animate({ 'marginLeft': '20px' }, 2000);
});

block3.mouseover(() => {
  block3.animate({width: '500pt', height: '500pt' }, 2000);
  block3.animate({ width: '10pt', height: '10pt' }, 1000);
});
