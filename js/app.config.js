angular.module('weatherApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        }).when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
})