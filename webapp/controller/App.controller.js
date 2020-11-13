sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
 ], function (Controller, MessageToast, JSONModel) {
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
        },

        onShowHello : function () {
         // show message
         MessageToast.show("Hello UI5");
        }
     });
 });