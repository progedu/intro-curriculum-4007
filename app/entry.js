'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

// 移動ボタンの取得
const movingButton = $('#moving-button');
// クリック関数
movingButton.click(() => {
  block.animate({ marginLeft: '500pt' }, 500);
  block.animate({ marginLeft: '20pt' }, 1000);
});