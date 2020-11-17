sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"walkthrough/model/Formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("walkthrough.controller.InvoiceList", {
		Formatter: Formatter,

		onInit: function(){
			this.getView().setModel(
				new JSONModel({
					currency: "EUR"
				}),
				"view"
			);
		},

		onFilterInvoices: function(oEvent){
			let oList = this.byId("invoiceList");
			let oBinding = oList.getBinding("items");
			let sQuery = oEvent.getParameter("query");
			if(sQuery){
				let aFilter = [];
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
				oBinding.filter(aFilter);
			}
		},
		
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		}	
	});
});