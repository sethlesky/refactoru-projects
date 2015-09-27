var app = angular.module('myApp', []);

app.controller('appCtl', function($scope){
	$scope.formVisible = false;
	$scope.profileVisible = false;
	$scope.showHide = "Show Form";

	$scope.submit = function() {
		console.log('submit!');
		$scope.profileVisible = true;
	};

	$scope.showForm = function() {
		$scope.formVisible = !$scope.formVisible;
		if ($scope.formVisible) {
			$scope.showHide = "Hide Form";
		} else {
			$scope.showHide = "Show Form";
		}

	};
});

