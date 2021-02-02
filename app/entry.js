'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const changeButton = $('#change-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.on('click', () => {
  block.animate({ marginLeft: '500px'}, 500);
  block.animate({ marginLeft: '20px'}, 500); 
});

changeButton.on('click', () => {   
  block.animate({ borderRadius: '50%' },2000);
  block.animate({ opacity: '0.5' },2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});