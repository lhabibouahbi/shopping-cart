sap.ui.controller("shoppingcart.Category", {


	categoryListItemPress: function(evt) {
		
		
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		
		var context = evt.getSource().getBindingContext('products');
		
		var path = context.sPath; //"/collection/0"
		
		var start = path.lastIndexOf('/') + 1;
		
		var catIndex = path.substring(start, path.length);
		
		router.navTo('category', {catIndex: catIndex});
		
	}

});