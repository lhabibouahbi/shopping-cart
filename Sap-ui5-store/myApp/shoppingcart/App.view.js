sap.ui.jsview("shoppingcart.App", {


	getControllerName : function() {
		return "shoppingcart.App";
	},


	createContent : function(oController) {
 		
		this.setDisplayBlock(true);
		
		return new sap.m.SplitApp("splitApp",{});
	}

});