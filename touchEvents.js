(function($)
{
	$.fn.touchstart = function(handler)
	{
		this.each(function(i, e) {
			e.addEventListener("touchstart", handler);
		}) ;
		return this;
	};

	$.fn.touchmove = function(handler)
	{
		this.each(function(i, e) {
			e.addEventListener("touchmove", handler);
		}) ;
		return this;
	};

	$.fn.touchend = function(handler)
	{
		this.each(function(i, e) {
			e.addEventListener("touchend", handler);
		}) ;
		return this;
	};

	$.isTouchSupported = ("ontouchstart" in document.documentElement);

})(jQuery);