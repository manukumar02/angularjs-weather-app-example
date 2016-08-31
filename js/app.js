var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


weatherApp.service('cityService', function () {
    this.city = 'Bangalore, IN';
})

weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
}]);