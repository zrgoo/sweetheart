'use strict';

/**
 * @ngdoc function
 * @name yourNewSweetheartdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yourNewSweetheartdApp
 */
angular.module('yourNewSweetheartdApp').controller('MainCtrl', function ($scope, $location, inputKeeper) {

	$scope.data = inputKeeper.getData();

	$scope.save = function() {
		inputKeeper.setData($scope.data);
		$location.path('/catch');
	};
	
});