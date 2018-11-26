"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var controller_1 = require("./controller");
console.log("running tests: " + controller_1.NumberOfTests);
var a = new model_1.default();
var result = controller_1.create();
var result2 = controller_1.edit(result);
