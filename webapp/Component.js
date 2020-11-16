sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel" 
], function(UIComponent, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("walkthrough.Component", {
        metadata : {
            manifest: "json"
        },

        init: function(){
            UIComponent.prototype.init.apply(this, arguments);
            // set Data Model
            let oData = {
                recipient : {
                    name : "World"
                 }
            };
            this.setModel(
                new JSONModel(oData)
            );
        }
	});
});