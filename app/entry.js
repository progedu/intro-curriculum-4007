'use strict';
import $ from 'jquery';
const block = $('#block');
const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft':'500pt' }, 2000);
  block.animate({ 'marginLeft': '20pt' }, 2000);
});
