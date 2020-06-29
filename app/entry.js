'use strict';
import $ from 'jquery';
//require('jquery-color'); // プラグインです

const multiBlock = $('.multiBlock');
const block = $('#block');

const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const roundingButton = $('#rounding-button');
const line = $('li:even');
const p = $('p');

scalingButton.click(() => {
  multiBlock.animate({ width: '200pt', height: '200pt' }, 2000);
  multiBlock.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  multiBlock.animate({ marginLeft: '500px' }, 500);
  multiBlock.animate({ marginLeft: '20px' }, 3000);
});

roundingButton.click(() => {
  multiBlock.animate({ borderRadius: '50%' }, 1500);
  multiBlock.animate({ borderRadius: '0%' }, 2500);
});

block.mouseover(() => {
  block.animate({width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 1000);
});

block.click (() => {
  block.css('background-color', '#ff0000');
});

line.css("color","red");

p.click(() => {
  p.slideUp();
}); 
