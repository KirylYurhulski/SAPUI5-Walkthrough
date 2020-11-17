sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"walkthrough/model/Formatter"
], function(Controller, JSONModel, Formatter) {
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
		}
	});
});