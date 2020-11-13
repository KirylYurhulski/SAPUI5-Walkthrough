sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel" 
 ], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("walkthrough.controller.App", {
        onInit : function(){
            let oData = {
                recipient : {
                    name : "World"
                 }
            };
            this.getView().setModel(
                new JSONModel(oData)
            );
             // set i18n model on view
             this.getView().setModel(
                new ResourceModel({
                    bundleName: "walkthrough.i18n.i18n",
                    supportedLocales: [""],
                    fallbackLocale: ""
                }), 
                "i18n"
            );
        },

        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        }
     });
 });