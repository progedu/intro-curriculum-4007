'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton1 = $('#moving-button1');
const movingButton2 = $('#moving-button2');

movingButton1.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

movingButton2.click(() => {
  block.animate({ 'marginTop': '500px' }, 500);
  block.animate({ 'marginTop': '20px' }, 1000);
});
