/**
* vaticanAssassin Module
*
* Description
*/
angular.module('vaticanAssassin', [])

angular.module('vaticanAssassin').controller('vaticanCtl', ['$scope', '$document', function($scope, $document){
	var docHeight, scrollPos, scrollPercent;
	var loadTime = (new Date()).getTime();
	var timeBeforeSignup = 0;
	$scope.click = function() {
		docHeight = document.body.clientHeight;
		scrollPos = document.body.scrollTop + window.innerHeight;
		scrollPercent = Math.floor((scrollPos / docHeight)*100) + "%";

		alert("Percent viewed: " + scrollPercent + "\n" +
			  "Distance scrolled: " + (scrollPos - window.innerHeight) + "px\n" +
			  "Time before signup: " + timeBeforeSignup + "ms"
			);
	};

	$scope.signup = function() {
		timeBeforeSignup = (new Date()).getTime() - loadTime;
	};
}])