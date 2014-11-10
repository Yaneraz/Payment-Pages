'use strict';

module.exports = function ($scope) {
    $scope.paymentMethods = [
        {name: 'Visa', type: 'card'},
        {name: 'MasterCard', type: 'card'},
        {name: 'Ukash', type: 'wallet'}
    ];

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
};