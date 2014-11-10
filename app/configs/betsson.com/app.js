'use strict';

require('./../../scripts/angular');
require('./../../scripts/angular-ui-router.min.js');
var routes = require('./../../routes');

// Directives
var ccd = require('./../../modules/creditCardDetails/creditCardDetails');
var amountSlider = require('./../../modules/amountSelectorSlider/amountSelectorSlider');
var promoCode = require('./../../modules/promoCode/promoCode');

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router'])
    .directive('creditCardDetails', ccd )
    .directive('amountSelector', amountSlider )
    .directive('promoCode', promoCode )
    .config(routes);


