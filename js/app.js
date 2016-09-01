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

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
        callback: 'JSON_CALLBACK'
    }, {
        get: {
            method: 'JSONP'
        }
    });
    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        id: '524901',
        APPID: '05e576aeb9c2e85239fa22211b682402'
    });

    $scope.convertToFarenhite = function (degk) {
        return Math.round((1.8 * (degk - 273)) + 32);
    }

    $scope.convertData = function (dt) {
        return new Date(dt * 1000);
    }
}]);