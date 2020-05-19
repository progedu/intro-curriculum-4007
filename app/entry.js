"use strict";
import $ from "jquery";
const block = $("#block");
const scalingButton = $("#scaling-button");
const movingButton = $("#moving-button");

scalingButton.click(() => {
	block.animate({ width: "200pt", height: "200pt" }, 2000);
	block.animate({ width: "100pt", height: "100pt" }, 2000);
});

movingButton.click(() => {
	block.animate({ marginLeft: "500px", opacity: 0.5 }, 2000);
	block.animate({ marginLeft: "20px", opacity: 1 }, 2000);
});
