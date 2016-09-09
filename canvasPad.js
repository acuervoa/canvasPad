"use strict";

function CanvasPadApp()
{
	var version = " v1.0",
	canvas2d = new Canvas2D($("#main>canvas")),
	toolbar = new Toolbar($("#toolbar")),
	drawing = false,
	points = [],
	actions = [];

	function setStatus(message) {

		$("#app>footer").text(message);
	}

	this.start = function() {
		$("#app>header").append(version);
		$("#main>canvas").mousemove(onMouseMove)
			.mousedown(onMouseDown)
			.mouseup(onMouseUp)
			.mouseout(onMouseUp);

		toolbar.toolbarButtonClicked = toolbarButtonClicked;
		toolbar.menuItemClicked = menuItemClicked;
	}

	function toolbarButtonClicked(action)
	{
		switch (action)
		{
			case "clear":
				if (confirm("Clear the canvas?"))
				{
					actions = [];
					redraw();
				}
				break;
			case "undo":
				actions.pop();
				redraw();
				break;

		}
	}

	function menuItemClicked(option, value)
	{
		canvas2d[option](value);
	}

	function onMouseMove(e) {
		penMoved(e.pageX, e.pageY);
	}

	function penMoved(pageX, pageY){
		var canvasPoint = canvas2d.getCanvasPoint(pageX, pageY);
		showCoordinates(canvasPoint);

		if(drawing) {
			points.push(canvasPoint);
			redraw();
		}
	}

	function redraw() {
		canvas2d.clear();
		for(var i in actions) {
			canvas2d.drawPoints(actions[i]);
		}
	}

	function showCoordinates(point) {
		$("#coords").text(point.x + ", " + point.y);
	}

	function onMouseDown(e) {
		e.preventDefault();
		penDown(e.pageX, e.pageY);
	}

	function penDown(pageX, pageY) {
		drawing = true;
		points = [];
		points.push(canvas2d.getCanvasPoint(pageX,pageY));
		actions.push(points);
	}

	function onMouseUp(e) {
		penUp();
	}

	function penUp() {
		drawing = false;
	}
}



$(function() {
	window.app = new CanvasPadApp();
	window.app.start();
});