'use strict';
import $ from 'jquery';
const block = $('.block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

//ボックスをクリックしてもアニメーション
//クラス指定で複数のボックスを動かしてみました
block.click(() => {
  block.animate({ width: '200pt', height: '200pt', 'marginLeft': '500px' }, 500);
  block.animate({ width: '100pt', height: '100pt', 'marginLeft': '20px' }, 500);
});

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

