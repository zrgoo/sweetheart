'use strict';

/**
 * @ngdoc overview
 * @name yourNewSweetheartdApp
 * @description
 * # yourNewSweetheartdApp
 *
 * Main module of the application.
 */

angular.module('yourNewSweetheartdApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
]).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
        })
        .when('/catch', {
            templateUrl: 'views/catch.html',
            controller: 'CatchCtrl',
        })
     	.when('/result', {
            templateUrl: 'views/result.html',
            controller: 'ResultCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
});