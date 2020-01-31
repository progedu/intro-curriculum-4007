'use strict'
import $ from 'jquery'
const block = $('#block')
const scalingButton = $('#scaling-button')
const movingButton = $('#moving-button')

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000)
  block.animate({ width: '100pt', height: '100pt' }, 2000)
})

movingButton.click(() => {
  block.animate({ 'margin-left': '500px' }, 500)
  block.animate({ 'margin-left': '20px' }, 1000)
})
