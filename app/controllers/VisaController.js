'use strict';

var utils = require('../utils');
var baseController = require('./BaseController');

function VisaController($scope) {
    // No need to explicitly pass the injected dependencies, provided they
    // are ordered consistently.
    VisaController.super_.apply(this, arguments);

    $scope.name = 'Visa';
}
utils.inherits(VisaController, baseController);

VisaController.prototype.testScope = function () {
    this.$scope.test = 'Hello from VisaController';
};

VisaController.prototype.deposit = function(){
    alert('You have deposited from ' + this.name.toUpperCase() +'! amount: ' + this.amount);
};

module.exports = VisaController;