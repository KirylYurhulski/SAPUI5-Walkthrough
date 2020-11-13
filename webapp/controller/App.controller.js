sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("walkthrough.controller.App", {
        onShowHello : function () {
           // show a native JavaScript alert
           MessageToast.show("Hello World!");
        }
     });
 });