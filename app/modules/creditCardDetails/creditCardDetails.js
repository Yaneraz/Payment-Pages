'use strict';

var fs = require('fs');
var template = fs.readFileSync(__dirname + '/creditCardDetails.html');

module.exports = function () {
    return {
        restrict: 'E',
        transclude: true,
        controller: function ($scope) {

        },
        template: template
    }
};