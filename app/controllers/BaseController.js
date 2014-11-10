'use strict';

function BaseController ($scope) {
    this.$scope = $scope;
    this.initialize();
}
BaseController.prototype.testScope = function () {
    this.$scope.test = 'Hello from BaseController';
};

BaseController.prototype.initialize = function () {
    this.testScope();
    this.$scope.deposit = this.deposit;
};

BaseController.prototype.deposit = function () {
    alert('You have deposited from BaseController! amount: ' + this.amount);
};


module.exports = BaseController;