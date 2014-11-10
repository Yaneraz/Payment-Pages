'use strict';

var fs = require('fs');
var template = fs.readFileSync(__dirname + '/promoCode.html');

module.exports = function () {
    return {
        restrict: 'E',
        transclude: true,
        controller: function ($scope) {
            $scope.promoCode = {};
        },
        template: template
    };
};