'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const moveToRightButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

moveToRightButton.click(() => {
  block.animate({
    marginLeft: '500px',
    borderRadius: '50%'
  }, 800);
  block.animate({
    borderRadius: '0%',
    marginLeft: '20px'
  }, 1000);
});