"use strict";
import $ from "jquery";

const block1 = $("#block1");

const scalingButton = $("#scaling-button");
const movingButton = $("#moving-button");

let n = 10;

scalingButton.on("click", () => {
  block.animate({ width: "120pt", height: "80pt" }, 1000);
  block.animate({ width: "100pt", height: "100pt" }, 1000);
});

movingButton.on("click", () => {
  block.animate({ "marginLeft": "50px" }, 500);
  block.animate({ "marginLeft": "20px" }, 1000);
});
