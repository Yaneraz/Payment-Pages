'use strict';

require('./scripts/angular');
require('./scripts/angular-ui-router.min');
var routes = require('./routes');

// Directives
var ccd = require('./modules/creditCardDetails/creditCardDetails');
var amountButtons = require('./modules/amountSelectorButtons/amountSelectorButtons');
var amountSlider = require('./modules/amountSelectorSlider/amountSelectorSlider');
var promoCode = require('./modules/promoCode/promoCode');

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router'])
    .directive('creditCardDetails', ccd )
    .directive('amountSelectorButtons', amountButtons )
    .directive('amountSelectorSlider', amountSlider )
    .directive('promoCode', promoCode )
    .config(routes);


