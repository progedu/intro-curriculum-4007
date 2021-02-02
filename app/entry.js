'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const bigButton = $('#big-button');
const smallButton = $('#small-button');

scalingButton.on('click', () => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

// クリックするたびに大きくなる
bigButton.on('click', () => {
  //  block.animate({ 'marginLeft': '500px' }, 500);
  //  block.animate({ 'marginLeft': '20px' }, 1000);
  block.animate({
    width: '+=100',
    height: '+=500'
  }, 500);
});

// クリックするたびに小さくなる
smallButton.on('click', () => {
  block.animate({
    width: '-=100',
    height: '-=500'
  }, 500);
});

//マウスオーバー時に回転（ほぼコピペ。。）
block.hover(function () {
  $(this).stop().animate({ zIndex: 1 }, {
    duration: 400,
    step: function (now) {
      $(this).css({ transform: 'rotate(' + (now * 360) + 'deg)' });
    },
    complete: function () {
      $(this).css('zIndex', 0);
    }
  })
}, function () {
  //角度を初期値に戻す
  $(this).css({ transform: 'rotate(0deg)' });
});
