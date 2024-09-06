/*global QUnit*/

sap.ui.define([
	"projeto_netflix/controller/projeto_netflix.controller"
], function (Controller) {
	"use strict";

	QUnit.module("projeto_netflix Controller");

	QUnit.test("I should test the projeto_netflix controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
