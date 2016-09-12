function Canvas2D($canvas)
{
	var context = $canvas[0].getContext("2d"),
		width = $canvas[0].width,
		height = $canvas[0].height;

	var pageOffset = $canvas.offset();

	context.lineWidth = 4;
	context.strokeStyle = "black";
	context.fillStyle = "black";
	context.globalAlpha = 1.0;
	context.lineJoin = "round";
	context.lineCap = "round";

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

	this.drawLine = function(point1, point2) {
		context.beginPath();
		context.moveTo(point1.x, point1.y);
		context.lineTo(point2.x, point2.y);
		context.stroke();
		return this;
	}


	this.penWidth = function(newWidth) {
		if (arguments.length) {
			context.lineWidth = newWidth;
			return this;
		}
		return context.lineWidth;
	};

	this.penColor = function(newColor) {
		if (arguments.length) {
			context.strokeStyle = newColor;
			context.fillStyle = newColor;
			return this;
		}
		return context.strokeStyle;
	};

	this.penOpacity = function(newOpacity){
		if (arguments.length) {
			context.globalAlpha = newOpacity;
			return this;
		}
		return context
	};

	this.savePen = function() {
		context.save();
		return this;
	};

	this.restorePen = function(){
		context.restore();
		return this;
	};

	$(window).resize(function() { pageOffset = $canvas.offset(); });
}