var app = angular.module('myApp', []);
app.controller('appCtrl', function($scope) {
    $scope.headerVisible = false;
    $scope.listVisible = false;
    $scope.tod = true;
    $scope.linkVisible1 = true;
    $scope.linkVisible2 = true;
    $scope.linkVisible3 = true;        

    $scope.showHeader = function() {
    	console.log("showing the header");
    	$scope.headerVisible = !$scope.headerVisible;
    };
	$scope.showList = function() {
    	console.log("showing the list");
    	$scope.listVisible = !$scope.listVisible;
    };

    $scope.linkClick = function(e, n) {
    	console.log('clicked');
    	console.log(n);
    	console.log(e);
    	var go = confirm("really?");
    	if (!go) {
			e.preventDefault();
			$scope["linkVisible" + n] = false;
    	}
    };
});