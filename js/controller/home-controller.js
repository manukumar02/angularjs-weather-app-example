(function () {
    'use strict';
    angular.module('app').controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
        $scope.city = cityService.city;
        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        })
}]);
})()