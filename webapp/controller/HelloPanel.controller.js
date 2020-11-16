sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
	"use strict";

	return Controller.extend("walkthrough.controller.HelloPanel", {
        onShowHello : function () {
            MessageToast.show(
				this.getView().getModel("i18n").getResourceBundle().getText("helloMsg", [
					this.getView().getModel().getProperty("/recipient/name")
				])
			);
		},

		onOpenDialog: function(){
			let oView = this.getView();
			// create dialog lazily
			if (!this.byId("helloDialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "walkthrough.view.HelloDialog",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("helloDialog").open();
			}
		},

		onCloseDialog: function(){
			this.byId("helloDialog").close();
		}
	});
});