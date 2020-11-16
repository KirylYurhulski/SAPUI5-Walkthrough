sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel" 
], function(UIComponent, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("walkthrough.Component", {
        metadata : {
            rootView: {
               "viewName": "walkthrough.view.App",
               "type": "XML",
               "async": true,
               "id": "app"
            }
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
            // set i18n Model
            this.setModel(
                new ResourceModel({
                    bundleName: "walkthrough.i18n.i18n",
                    supportedLocales: [""],
                    fallbackLocale: ""
                }), 
                "i18n"
            );
        }
	});
});