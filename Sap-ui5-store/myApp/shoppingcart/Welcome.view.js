sap.ui.jsview("shoppingcart.Welcome", {


	getControllerName : function() {
		return "shoppingcart.Welcome";
	},

	createContent : function(oController) {
		
		var oImage = new sap.m.Image({
			src: "resources/welcome.jpg",
			width: '500px'
		});
		
		var oText = new sap.m.Text({
			text: "SAPUI5 Shopping Cart Demo"
		}).addStyleClass('welcomeText');
		
 		return new sap.m.Page({
			title: "Welcome",
			content: [
			          new sap.m.VBox({
			        	  items: [oImage,oText],
			        	  alignItems: sap.m.FlexAlignItems.Center,
			        	  justifyContent: sap.m.FlexJustifyContent.Center
			          })
			]
		});
	}

});