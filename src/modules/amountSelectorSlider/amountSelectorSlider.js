module.directive('amountSelectorSlider', function(){
    return {
        restrict: 'E',
        transclude: true,
        controller: function($scope){
            $scope.predefinedAmounts = [25, 50, 100, 200];
            $scope.amount = 0;
        },
        templateUrl: 'modules/amountSelectorSlider/amountSelectorSlider.html'
    }
});