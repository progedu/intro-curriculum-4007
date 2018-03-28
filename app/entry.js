'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  scalingButton = $('#scaling-button');
const  movingBtn = $('#moving-btn');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingBtn.on('click', () => {
  block.animate({'marginLeft': '500px'}, 500).animate({'marginLeft':'20px'}, 1000);
});
