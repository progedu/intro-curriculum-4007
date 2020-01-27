'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
// mobingButton.click(() => {
//   block.animate({ 'marginLeft': '500px' },2000);
//   block.animate({ 'marginLeft': '20px' }, 2000);
// })

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 2000);
  block.animate({ 'marginLeft': '20px' }, 2000);
});
