'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

scalingButton.click(() => {
  // 回転しながら現れる
  block.fadeIn(1500);
  block.css({
    "transform": "rotateY(0deg)"
  });
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
  // 消える
  block.fadeOut(1500);
  block.css({
    "transform": "rotateY(0deg)"
  });
});

movingButton.click(() => {
  // 回転しながら現れる
  block.fadeIn(1500);
  block.css({
    "transform": "rotateY(0deg)"
  });

  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
  // 消える
  block.fadeOut(1500);
  block.css({
    "transform": "rotateY(0deg)"
  });

});