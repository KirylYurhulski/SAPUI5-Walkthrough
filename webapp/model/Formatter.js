sap.ui.define([], function() {
	"use strict";

	return {
		statusText: function(sStatus){
			let resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			let sStatusText;
			switch (sStatus) {
				case "A":
					sStatusText = resourceBundle.getText("invoiceStatusA");
					break;
				case "B":
					sStatusText = resourceBundle.getText("invoiceStatusB");
					break;
				case "C":
					sStatusText = resourceBundle.getText("invoiceStatusC");
					break;
				default:
					sStatusText = sStatus;
					break;
			}
			return sStatusText;
		}
	}
});