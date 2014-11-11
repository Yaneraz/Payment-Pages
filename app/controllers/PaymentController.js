'use strict';

var pmService = require('../services/PaymentMethodListService');
pmService = new pmService();

function PaymentController($scope){
    $scope.paymentMethods = pmService.getPaymentMethods();

    $scope.selectItem = function (selectedItem) {
        for (var key in $scope.paymentMethods) {
            var obj = $scope.paymentMethods[key];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    obj.selected = false;
                    if (selectedItem === obj) {
                        selectedItem.selected = true;
                    }
                }
            }
        }
    };
}

PaymentController.$inject = ['$scope'];
module.exports = PaymentController;