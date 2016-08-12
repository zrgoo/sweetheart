'use strict';

/**
 * @ngdoc function
 * @name yourNewSweetheartdApp.controller:CatchCtrl
 * @description
 * # CatchCtrl
 * Controller of the yourNewSweetheartdApp
 */
angular.module('yourNewSweetheartdApp').controller('CatchCtrl', function ($scope, $location, $timeout, $interval) {
	
	$scope.title = 'Ihr wollt das Ergebnis sehen? Erst müsst ihr mich fangen!';
	$scope.counter = 10;

	$scope.$on('catched', function() {
		$scope.title = 'Glückwunsch!';
		$scope.$apply();
		showResult();
	});

	function showResult() {
		$timeout(function() {
			$location.path('/result');
			$scope.$apply();
		}, 1000);
	}

	var time = $interval(function() {
		$scope.counter--;

		if ($scope.counter === 0) {
			stopTime();
		}
	}, 1000);

	function stopTime() {
		if (angular.isDefined(time)) {
			$interval.cancel(time);
			showResult();
		}
	}

});