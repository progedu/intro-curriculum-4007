'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#moving-button');

scalingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});
