'use strict';

function PaymentMethodListService($http, $resource) {
    this.getPaymentMethods = function () {
        return [
            {name: 'Visa', type: 'card'},
            {name: 'MasterCard', type: 'card'},
            {name: 'Ukash', type: 'wallet'}
        ];
    };
}

PaymentMethodListService.$inject = ['$http', '$resource'];

module.exports = PaymentMethodListService;