sap.ui.jsview("shoppingcart.Cart", {


	getControllerName : function() {
		return "shoppingcart.Cart";
	},


	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			showNavButton: true,
			navButtonPress: function() {
				
				window.history.go(-1);
				
			},
			content: [
			
			]
		});
	}

});