'use strict';

/**
 * @ngdoc function
 * @name yourNewSweetheartdApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the yourNewSweetheartdApp
 */
angular.module('yourNewSweetheartdApp').controller('ResultCtrl', function ($scope, $location, inputKeeper) {

	$scope.result = inputKeeper.getResult();
	
	$scope.start = function() {
		$location.path('/');
	};

});