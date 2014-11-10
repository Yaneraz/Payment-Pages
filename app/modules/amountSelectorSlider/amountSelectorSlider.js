'use strict';

var fs = require('fs');
var template = fs.readFileSync(__dirname + '/amountSelectorSlider.html');

module.exports = function () {
    return {
        restrict: 'E',
        transclude: true,
        controller: function ($scope) {
            $scope.predefinedAmounts = [25, 50, 100, 200];
            $scope.amount = 0;
        },
        template: template
    }
};