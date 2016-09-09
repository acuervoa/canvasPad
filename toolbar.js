function Toolbar($toolbar)
{
	var _this = this;

	this.toolbarButtonClicked = function(action)
	{
		return false;
	};

	this.menuItemClicked = function(option, value)
	{
		return false;
	};

	this.hideMenus = function()
	{
		$(".menu", $toolbar).hide();
	};

	$("button", $toolbar).click(function(e) {
		onToolbarButtonClicked($(this));
	});

	function onToolbarButtonClicked($button)
	{
		var action = $button.data("action");
		if (!_this.toolbarButtonClicked(action))
		{
			if (action == "menu")
			{
				showMenu($button.siblings("ul.munu"));
			}
			else
			{
				_this.hideMenus();
			}
		}
	}

	function showMenu($menu)
	{
		if($menu.is(":visible"))
		{
			$menu.fadeOur("fast");
		}
		else
		{
			// Hide any open menus
			_this.hideMenus();
			// Show this menu
			$menu.fadeIn("fast");
		}
	}

	$(".menu>li", $toolbar).click(function(e){
		onMenuItemClicked($(this));
	});

	function onMenuItemClicked($item)
	{
		var $menu = $item.parent();
		var option = $menu.data("option");
		var value = $item.data("value");
		if(!_this.menuItemClicked(option, value))
		{
			$item.addClass("selected")
				.siblins().removeClass("selected");
			$menu.fadeOut("fast");
		}
	}
}