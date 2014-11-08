'use strict';

// Declare app level module which depends on views, and components
var module = angular.module('myApp', [
    'ui.router'
]);

module
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('deposit', {
                url: '/deposit',
                templateUrl: 'templates/paymentMethods.html',
                controller: 'PaymentMethodsController'
            })
            .state('deposit.item', {
                url: '/:item',
                templateUrl: function($stateParams){
                    return 'templates/deposit/' + $stateParams.item + '/' + $stateParams.item +'.html';
                },
                controllerProvider: function($stateParams) {
                    return $stateParams.item + 'Controller';
                }
            });
        $urlRouterProvider.when('', '/deposit');
    });