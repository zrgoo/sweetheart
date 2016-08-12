'use strict';

/**
 * @ngdoc function
 * @name yourNewSweetheartdApp.directive:catchMe
 * @description
 * # catchMe
 * Catch me if you can!
 */
angular.module('yourNewSweetheartdApp').directive('catchMe', function() {
    return {
        restrict: 'E',
        link: function(scope, element) {
            function createBall() {
            	var pokeBall = document.createElement('img');
	            pokeBall.src = 'images/sw.png';

	            var angularPokeBall = angular.element(pokeBall);
	            angularPokeBall.css('position', 'absolute');

	            element.append(pokeBall);

	            return angularPokeBall;
            }

            function createPlayer() {
            	var me = document.createElement('img');
            	me.src = 'images/me.png';            	
            	element.append(me);
            	return $(me).css('position', 'absolute');
            }

            function getCoordinates(e) {
                e = e || window.event;
                var pageX = e.pageX;
                var pageY = e.pageY;

                if (pageX === undefined) {
                    pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }

                return {
                	x: pageX,
                	y: pageY
                };
            }            

            var ball = createBall();
            var ballx, bally;
            var player = createPlayer();            

            window.addEventListener('mousemove', function(event) {
            	var coord = getCoordinates(event);

            	ballx = coord.x - 25;
            	bally = coord.y - 25;

            	ball.css({
            		left: ballx + 'px',
            		top: bally + 'px'
            	});
            });

			function makeNewPosition(){			    
			    var h = window.innerHeight - 50;
			    var w = window.innerWidth - 50;			    
			    var nh = Math.floor(Math.random() * h);
			    var nw = Math.floor(Math.random() * w);

			    return [nh,nw];			    
			}

			function run(){				
			    var newq = makeNewPosition();
			    var oldq = player.offset();
			    var speed = calcSpeed([oldq.top, oldq.left], newq);

			    if (!catchDetector(oldq.left, oldq.top, ballx, bally, 100)) {
			    	player.animate({ 
				    	top: newq[0], 
				    	left: newq[1] 
				    }, speed, function(){
				     	run();
				    });
			    } else {
			    	player.transition({
			    		scale: 2
			    	}, 3 * speed, function() {			    		
			    		scope.$emit('catched');
			    	});
			    }
			}

			function calcSpeed(prev, next) {			    
			    var x = Math.abs(prev[1] - next[1]);
			    var y = Math.abs(prev[0] - next[0]);			    
			    var greatest = x > y ? x : y;			    
			    var speedModifier = 1;
			    var speed = Math.ceil(greatest/speedModifier);

			    return speed;
			}       

			function catchDetector(x1, y1, x2, y2, threshold) {				
				return Math.abs(x1 - x2) < threshold && Math.abs(y1 - y2) < threshold;
			}

			run();
        }
    };
});