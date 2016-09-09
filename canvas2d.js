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

	$(window).resize(function() { pageOffset = $canvas.offset(); });
}