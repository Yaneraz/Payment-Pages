module.directive('amountSelectorButtons', function () {
    return {
        restrict: 'E',
        transclude: true,
        controller: function ($scope) {
            $scope.predefinedAmounts = [25, 50, 100, 200];
            $scope.amount = 0;

            $scope.setAmount = function(newAmount){
                $scope.amount = newAmount;
            };
        },
        templateUrl: 'modules/amountSelectorButtons/amountSelectorButtons.html'
    };
});