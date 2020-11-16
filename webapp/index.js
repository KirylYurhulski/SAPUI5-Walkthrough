sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer){
	"use strict";
	
	new ComponentContainer({
		name: "walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");

    /*XMLView.create({
		viewName: "walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});*/
});