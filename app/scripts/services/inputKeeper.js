'use strict';

/**
 * @ngdoc function
 * @name yourNewSweetheartdApp.factory:inputKeeper
 * @description
 * # inputKeeper
 * Service to store input data
 */
angular.module('yourNewSweetheartdApp').factory('inputKeeper', function() {
	
	var defaults = {
		fussball: 10,
		fcb: 10,
		watch: 10,
		ps: 10,
		xbox: 10,
		kicker: 10,
		chill: 10,
		sleep: 10,
		coffee: 10,
		angular: 10,
		angular2: 10,
		react: 10,
		es5: 5,
		es6: 10,
		ts: 10,
		experiment: 10
	};

	var totalPoints = 0;

	for (var d in defaults) {
		totalPoints += defaults[d];
	}

	var data = {
		angular: 5,
		react: 5
	};

	return {

		getData: function() {
			return angular.copy(data);
		},

		setData: function(d) {
			data = d;
		},

		getResult: function() {
			var result = 0;

			for (var d in data) {
				switch (typeof data[d]) {
					case 'boolean':
						if (data[d]) {
							result += defaults[d];
						}
						break;
					case 'number':
						result += data[d];
						break;
					case 'string':
						result += parseInt(data[d]);
						break;
					default:
						break;
				}				
			}

			console.log(result, totalPoints);

			return (100 * result / totalPoints).toFixed(2);
		}

	};	
});