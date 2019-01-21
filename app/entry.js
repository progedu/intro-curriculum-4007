'use strict';
import $ from 'jQuery';
require('jquery-color'); // プラグインです
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');
const tumblingButton = $('#tumbling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px'}, 2000);
  block.animate({ 'marginLeft': '20px'}, 2000);
});

// 手裏剣アニメーション！
tumblingButton.click(() => {
  // ↓右に行くときのアニメーション
  block.animate(
    {
      opacity:0, //だんだん透過
      'marginLeft': '500px', //右に移動
      backgroundColor: '#a8eded', //※これはローワーキャメルケースにする必要があります！
      //ここから回転アニメーション
      zIndex:1},{
      duration:2000,
      //step関数は、アニメーションが進むたびに実行されます
      step:function(now){
        //"now"には2秒間のアニメーションのコマ数が入る
        //つまりz-indexが０〜１になるまでのアニメーションのコマ数が"now"に入ります
        $(this).css({transform:'rotate(' + (now * 1080) + 'deg)'});
      },
      complete:function(){
        //z-indexを元に戻す
        block.css('zIndex', 0);
      }
    }
  );
  // ↓戻ってくる時のアニメーション
  block.animate(
    {
      opacity:1,
      'marginLeft': '20px',
      backgroundColor: '#F2ABCA',
      zIndex:1},{
      duration:2000,
      step:function(now){
        $(this).css({transform:'rotate(' + (now * 1080) + 'deg)'});
      },
      complete:function(){
        block.css('zIndex', 0);
      }
    }
  );
});