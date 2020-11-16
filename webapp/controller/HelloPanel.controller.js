sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("walkthrough.controller.HelloPanel", {
        onShowHello : function () {
            MessageToast.show(
				this.getView().getModel("i18n").getResourceBundle().getText("helloMsg", [
					this.getView().getModel().getProperty("/recipient/name")
				])
			);
        }
	});
});