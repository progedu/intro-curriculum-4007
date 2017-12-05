'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ marginLeft: '500pt'}, 500);
  block.animate({ marginLeft: '20pt' }, 1000);
});
