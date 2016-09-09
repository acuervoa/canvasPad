"use strict";

function CanvasPadApp()
{
	var version = " v1.0",
	canvas2d = new Canvas2D($("#main>canvas"));

	function setStatus(message) {

		$("#app>footer").text(message);
	}

	this.start = function() {
		$("#app>header").append(version);
		$("#main>canvas").mousemove(onMouseMove);
	}

	function onMouseMove(e) {
		var canvasPoint = canvas2d.getCanvasPoint(e.pageX, e.pageY);
		showCoordinates(canvasPoint);
	}

	function showCoordinates(point) {
		$("#coords").text(point.x + ", " + point.y);
	}
}



$(function() {
	window.app = new CanvasPadApp();
	window.app.start();
});