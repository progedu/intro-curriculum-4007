'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200px', height: '200px' }, 2000);
  block.animate({ width: '100px', height: '100px' }, 2000);
});

movingButton.click(() => {
  block.animate({ marginLeft: getRandomInt(50, 600) +'px'}, getRandomInt(100, 500));
  block.animate({ marginTop: getRandomInt(100, 700) +'px'}, getRandomInt(100, 800));
  block.animate({ marginLeft: '20px'}, getRandomInt(100, 800));
  block.animate({ marginTop: '20px'}, getRandomInt(100, 2000));
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};