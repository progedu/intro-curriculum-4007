'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  block1 = $('#block1');
const  scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');


scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt', fontSize: "30pt"}, 2000);
  block.animate({ width: '100pt', height: '100pt' ,fontSize: "15pt"}, 2000);
});


movingButton.click(() => {
  block.animate({ 'marginLeft':'500px' }, 500);
  block.animate({ 'marginLeft':'20px' }, 1000);
});

block1.click(()=>{
  block1.animate({ opacity : 0}, 500);
});