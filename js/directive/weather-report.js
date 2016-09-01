(function () {
    'use strict';

    angular.module('app').directive('weatherReport', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/weatherReport.html',
            replace: true,
            scope: {
                weatherDay: '=',
                convertToStandard: '&',
                convertToDate: '&',
                dateFormat: '@'
            }
        }
    })
})()