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

// override
VisaController.prototype.testScope = function () {
    this.$scope.test = 'Hello from VisaController';
};

// override
VisaController.prototype.deposit = function(){
    alert('You have deposited from ' + this.name.toUpperCase() +'! amount: ' + this.amount);
};

VisaController.$inject = ['$scope'];

module.exports = VisaController;