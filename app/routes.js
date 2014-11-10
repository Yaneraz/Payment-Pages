'use strict';

var fs = require('fs');
var paymentController = require('./controllers/PaymentController');
var visaController = require('./controllers/VisaController');
var mastercardController = require('./controllers/MastercardController');
var ukashController = require('./controllers/UkashController');

var paymentMethodsTemlate = fs.readFileSync(__dirname + '/views/paymentMethods.html');
var visaTemplate = fs.readFileSync(__dirname + '/views/deposit/visa/visa.html');
var mastercardTemplate = fs.readFileSync(__dirname + '/views/deposit/mastercard/mastercard.html');
var ukashTemplate = fs.readFileSync(__dirname + '/views/deposit/ukash/ukash.html');

var temlate = fs.readFileSync(__dirname + '/modules/amountSelectorSlider/amountSelectorSlider.html');

function Routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('deposit', {
            url: '/deposit',
            template: paymentMethodsTemlate,
            controller: paymentController
        })
        .state('deposit.visa', {
            url: '/visa',
            template: visaTemplate,
            controller: visaController
        })
        .state('deposit.mastercard', {
            url: '/mastercard',
            template: mastercardTemplate,
            controller: mastercardController
        })
        .state('deposit.ukash', {
            url: '/ukash',
            template: ukashTemplate,
            controller: ukashController
        });
    $urlRouterProvider.when('', '/deposit');
}

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = Routes;

