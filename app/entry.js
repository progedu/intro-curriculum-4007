'use strict';
import $ from 'jquery';
const block = $('.block');
const root = $('#root');
root.text('< N, Thanks!! > の上にカーソルをおいてみたり、クリックしてみてください')

const scalingButton = $('#scaling-button');
// const movingButton = $('#moving-button');
const movingButton2 = $('#moving-button2');
const roundingButton = $('#rounding-button');
const letterChangeButton = $('#letterChange-button');
const flashButton = $('#flash-button');
const flashButton2 = $('#flash-button2');
const rotatingButton = $('#rotating-button');

scalingButton.on('click', () => {
  block.animate({ width: '200px', height: '200px' }, 2000);
  block.animate({ width: '130px', height: '130px' }, 2000);
});

// movingButton2が上手く動作しなかったので、コメントアウトしました
// movingButton.on('click', () => {
//   block.animate({ marginLeft: '500px' }, 2000);
//   block.animate({ marginLeft: '20px' }, 2000);
// });

movingButton2.on('click', () => {
  block.toggleClass('move');
});

roundingButton.on('click', () => {
  block.animate({ borderRadius: '50%' }, 1000);
  block.animate({ borderRadius: '0%' }, 500);
  block.animate({ borderRadius: '50%' }, 1000);
  block.animate({ borderRadius: '0%' }, 500);
});

letterChangeButton.on('click', () => {
  $('#text1').text('Thanks!!');
  $('#text2').text('Welcome!!');
});

$(`#text1`).on ({
  mouseenter: function() {
    block.css('background', '#0fb817')
  },
  mouseleave: function() {
    block.css('background', 'linear-gradient(45deg,#e647e6 0%, #00B7FF 100%)')
  },
  click: function() {
    alert('N予備校にようこそ')
  }
});

flashButton.on('click', () => {
  block.animate({ 'opacity': 0.2}, 30, 'swing');
  block.animate({ 'opacity': 1}, 30, 'swing');
  block.animate({ 'opacity': 0.2}, 30, 'swing');
  block.animate({ 'opacity': 1}, 30, 'swing');
  block.animate({ 'opacity': 0.2}, 30, 'swing');
  block.animate({ 'opacity': 1}, 30, 'swing');
});

flashButton2.on('click', () => {
  let a = setInterval(() => {
    block.fadeOut(100, function(){
      block.fadeIn(100)});
  },1000);
  setTimeout(() => {
    clearInterval(a);
  }, 7000);
});

rotatingButton.on('click', () => {
  block.animate({zIndex:1}, {
    duration:2000,
    step: function(a) {
      block.css({transform:`rotate(${(a * 720)}deg)`});
    },
    complete: function() {
      block.css('zIndex', 0);
    }
  })
});