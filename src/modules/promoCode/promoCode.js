module.directive('promoCode', function() {
    return {
        restrict: 'E',
        transclude: true,
        controller: function($scope) {
            $scope.promoCode = {};
        },
        templateUrl: 'modules/promoCode/promoCode.html'
    };
});