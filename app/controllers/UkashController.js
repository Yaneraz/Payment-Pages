'use strict';

function UkashController($scope, $stateParams) {
    $scope.name = 'Ukash';
}

UkashController.$inject = ['$scope', '$stateParams'];

module.exports = UkashController;