sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox',
	'sap/f/library',
	"sap/ui/core/IconPool",
	"sap/m/Dialog",
	"sap/m/DialogType",
	"sap/m/Button",
	"sap/m/ButtonType",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Text",
	"sap/m/MessageToast",
	"sap/ui/Device",
	"sap/base/Log"
], function (JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox, fioriLibrary, IconPool, Dialog, DialogType, Button, ButtonType, List, StandardListItem, TextMessageToast, Device, Log) {
	"use strict";
	return Controller.extend("sap.ui.demo.fiori2.controller.Master", {
		onInit: function () {
			this.oView = this.getView();
			this._bDescendingSort = false;
			this.oProductsTable = this.oView.byId("productsTable");
			this.oRouter = this.getOwnerComponent().getRouter();
		},

		
		onSearch: function (oEvent) {
			this.getView().getParent().getParent().setMode("ShowHideMode");		},



		onSort: function () {
			this._bDescendingSort = !this._bDescendingSort;
			var oBinding = this.oProductsTable.getBinding("items"),
				oSorter = new Sorter("Name", this._bDescendingSort);

			oBinding.sort(oSorter);
		},
		onSearch: function (oEvent) {
			var oTableSearchState = [],
				sQuery = oEvent.getParameter("query");

			if (sQuery && sQuery.length > 0) {
				oTableSearchState = [new Filter("Name", FilterOperator.Contains, sQuery)];
			}

			this.oProductsTable.getBinding("items").filter(oTableSearchState, "Application");
		},
		onListItemPressx: function (oEvent) {
			var productPath = oEvent.getSource().getBindingContext("products").getPath(),
				product = productPath.split("/").slice(-1).pop();

			this.oRouter.navTo("detail", {layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded, product: product});
		},

		onAddtocartx: function (oEvent) {			
			var productPath = oEvent.getSource().getBindingContext("products").sPath;
			var model = this.getView().getModel('products').getProperty(productPath);
			var modelC = this.getView().getModel('carta').getData();	 

	        var itemexist = "no";

			for(var i = 0; i < modelC.ProductCollection.length; i++ ){
				if(modelC.ProductCollection[i].ProductId == model.ProductId){
				
					itemexist = "yes"
					if(modelC.ProductCollection[i].ProductId == model.ProductId){
						console.log(modelC.ProductCollection[i].qq = modelC.ProductCollection[i].qq + 1)
					}
				}else{}
			};

			if(itemexist == "no"){
				modelC.ProductCollection.push({
					ProductId: model.ProductId,
					Category: model.Category,
					CurrencyCode: model.CurrencyCode,
					DateOfSale: model.DateOfSale,
					Depth: model.Depth,
					Description: model.Description,
					DimUnit: model.DimUnit,
					Height: model.Height,
					MainCategory: model.MainCategory,
					Name: model.Name,
					Price: model.Price,
					ProductPicUrl: model.ProductPicUrl,
					Quantity: model.Quantity,
					Status: model.Status,
					SupplierName: model.SupplierName,
					TaxTarifCode: model.TaxTarifCode,
					UoM: model.UoM,
					WeightMeasure: model.WeightMeasure,
					WeightUnit: model.WeightUnit,
					Width: model.Width,
					qq:1
				})	
		    }
    
			var totalprice = 0
			for(var i = 0; i < modelC.ProductCollection.length; i++ ){
				totalprice = (totalprice + modelC.ProductCollection[i].Price *  modelC.ProductCollection[i].qq)	    
			};

            console.log(totalprice)
			console.log( this.byId('returnToShopButton').setText("Checkout (" + totalprice + "€)"))

			this.byId("total").setText("Total (" + modelC.ProductCollection.length + ")" )
			this.getView().getModel('carta').setData(modelC)
		},

        removeitem: function(oEvent){
           var pid = oEvent.getSource().getParent().oParent.mAggregations.cells[2].mAggregations.items[1].getText();
	       var itm = this.getView().getModel('carta').getData().ProductCollection
	
	 	    for(var i = 0; i < itm.length; i++ ){
			if(itm[i].ProductId ==pid){
				itm.splice(i,1);
				break;
			}else{}
	     	};

			 this.getView().getModel('carta').setData(this.getView().getModel('carta').getData())
			
			 var totalprice = 0
			 for(var i = 0; i < itm.length; i++ ){
				 totalprice = (totalprice +itm[i].Price *  itm[i].qq)	    
			 };		

			 this.byId("total").setText("Total (" + itm.length + ")" )
			 console.log( this.byId('returnToShopButton').setText("Checkout (" + totalprice + "€)"))

			 if(totalprice == 0){
				console.log( this.byId('returnToShopButton').setText("Checkout"))
				this.byId("total").setText("your cart is empty!" )
			 }
		},



        filter_all : function(oEvent){		
			var aFilter = [];		
		 	   aFilter.push(new Filter("Category", FilterOperator.Contains, ""));
			 var oList = this.byId("productsTable");
			 var oBinding = oList.getBinding("items");
			 oBinding.filter(aFilter);
		},
		filter_laptop : function(oEvent){		
			var aFilter = [];		
		 	   aFilter.push(new Filter("Category", FilterOperator.Contains, "laptops"));
			 var oList = this.byId("productsTable");
			 var oBinding = oList.getBinding("items");
			 oBinding.filter(aFilter);
		},
        filter_tablet : function(oEvent){		
			var sQuery = oEvent.getSource().getText();
			var aFilter = [];		
		 	   aFilter.push(new Filter("Category", FilterOperator.Contains, "tablet" ));
			 var oList = this.byId("productsTable");
			 var oBinding = oList.getBinding("items");
			 oBinding.filter(aFilter);
		},
		filter_mobile : function(oEvent){		
			var aFilter = [];		
		 	   aFilter.push(new Filter("Category", FilterOperator.Contains, "phone"));
			 var oList = this.byId("productsTable");
			 var oBinding = oList.getBinding("items");
			 oBinding.filter(aFilter);
		},

		onAfterDetailNavigate : function(){
			this.getView().byId("master").HideMode;
		  },
		  


		  onAfterRendering: function () {
			var oSplitContainer = this.getView().byId("SplitAppDemo")
			oSplitContainer.setMode(sap.m.SplitAppMode.StretchCompressMode);
			if(oSplitContainer.isMasterShown()){
		   oSplitContainer.setMode(sap.m.SplitAppMode.HideMode)}

					// set all parent elements to 100% height, this should be done by app developer, but just in case

		},

		onExit: function () {
			Device.orientation.detachHandler(this.onOrientationChange, this);
		},

		onOrientationChange: function (mParams) {
			var sMsg = "Orientation now is: " + (mParams.landscape ? "Landscape" : "Portrait");
			MessageToast.show(sMsg, { duration: 5000 });
		},

		onPressNavToDetail: function () {
			this.getSplitAppObj().to(this.createId("detailDetail"));
		},

		onPressDetailBack: function () {
			this.getSplitAppObj().backDetail();
		},

		onPressMasterBack: function () {
			this.getSplitAppObj().backMaster();
		},

		onPressGoToMaster: function () {
			this.getSplitAppObj().toMaster(this.createId("master2"));
		},

		onListItemPress: function (oEvent) {
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

			this.getSplitAppObj().toDetail(this.createId(sToPageId));
		},

		onPressModeBtn: function (oEvent) {
			var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

			this.getSplitAppObj().setMode(sSplitAppMode);
			MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, { duration: 5000 });
		},

		getSplitAppObj: function () {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		},

		conAddtocart: function(a){
	    	//	var oText = {};

			//oText = this.getCore()
			//.oProductsTable.aCustomStyleClasses[0]

			var rex = this
			
			console.log(rex)
		},
		
	
	});
});
