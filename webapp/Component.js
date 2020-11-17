sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "walkthrough/controller/HelloDialog" 
], function(UIComponent, JSONModel, ResourceModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("walkthrough.Component", {
        metadata : {
            manifest: "json"
        },

        init: function(){
            UIComponent.prototype.init.apply(this, arguments);
            // set Data Model
            this.setModel(
                new JSONModel({
                    recipient : {
                        name : "World"
                     }
                })
            );
            // set Dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
            // create the views based on the url/hash
			this.getRouter().initialize();
        },

        exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
        }
	});
});