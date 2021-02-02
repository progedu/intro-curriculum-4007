'use strict';
import $ from 'jquery';
const block = $('#block');
const scalMoveButton = $('#scalMove-button');

scalMoveButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' ,'marginLeft':'500px'}, 2000);
  block.animate({ width: '100pt', height: '100pt' ,'marginLeft':'20px'}, 2000);
});
