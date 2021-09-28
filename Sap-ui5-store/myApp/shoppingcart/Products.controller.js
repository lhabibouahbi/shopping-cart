sap.ui.controller("shoppingcart.Products", {

	onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},
	
	_handleRouteMatched: function(evt) {
		
		if("Products" !== evt.getParameter("name")){
			return;
		} 
		
		this.catIndex = evt.getParameter("arguments").catIndex;
		this.subCatIndex = evt.getParameter("arguments").subCatIndex;
		
		var context = sap.ui.getCore().byId("app").getModel('products').getContext('/collection/' + this.catIndex + '/items/subcat/' + this.subCatIndex);
		
		this.getView().setBindingContext(context,'products');
		
		
	},
	
	productPress: function(oEvent) {
		
		var oBindingContext = oEvent.getSource().getBindingContext('products');
		
		var sPath = oBindingContext.sPath;
		
		var start = sPath.lastIndexOf("/") + 1;
		
		var productIndex = sPath.substring(start, sPath.length);
		
		this.router.navTo("ProductInfo", {catIndex: this.catIndex, subCatIndex: this.subCatIndex, productIndex: productIndex})
		
	}
	
});