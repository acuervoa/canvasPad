function Canvas2D($canvas)
{
	var context = $canvas[0].getContext("2d"),
		width = $canvas[0].width,
		height = $canvas[0].height;

	var pageOffset = $canvas.offset();

	this.getCanvasPoint = function(pageX, pageY) {
		return {
			x: pageX - pageOffset.left,
			y: pageY - pageOffset.top
		}
	};

	this.clear = function() {
		context.clearRect(0, 0, width, height);
		return this;
	};

	this.drawPoints = function(points) {
		context.beginPath();
		context.moveTo(points[0].x, points[0].y);
		for(var i=1; i < points.length; i++) {
			context.lineTo(points[i].x, points[i].y);
		}
		context.stroke();
		return this;
	};

	$(window).resize(function() { pageOffset = $canvas.offset(); });
}