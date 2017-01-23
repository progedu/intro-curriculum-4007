'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  scalingButton = $('#scaling-button');
const  movingButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ marginLeft: '500px', width: '20pt', height: '20pt' }, 2000);
  block.animate({ margintop: '400px', width: '300pt', height: '300pt' }, 2000);
  block.animate({ marginLeft: '20px', margintop: '200px', width: '100pt', height: '100pt' }, 2000);
});
