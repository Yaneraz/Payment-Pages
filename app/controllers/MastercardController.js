'use strict';

var utils = require('../utils');
var baseController = require('./BaseController');

function MastercardController($scope) {
    // No need to explicitly pass the injected dependencies, provided they
    // are ordered consistently.
    MastercardController.super_.apply(this, arguments);

    $scope.name = 'MasterCard';
}
utils.inherits(MastercardController, baseController);

MastercardController.prototype.testScope = function () {
    this.$scope.test = 'Hello from MastercardController';
};

module.exports = MastercardController;