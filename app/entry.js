'use strict';
import $ from 'jquery';
const block = $('#block');
const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 200);
  block.animate({ 'marginLeft': '20px'}, 200);
});
