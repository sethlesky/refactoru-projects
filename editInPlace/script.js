var app = angular.module('myApp', []);

app.controller('appCtl', function($scope){
	$scope.name = "Homer Simpson";
	$scope.address = "24 Springfield Lane";
	$scope.phone = "520-357-1209";
	$scope.nameEdit = false;
	$scope.addressEdit = false;
	$scope.phoneEdit = false;

	$scope.edit = function(event, type) {
		console.log("clicked");
		console.log(type);
		if (type == 'name') $scope.nameEdit = !$scope.nameEdit;
		if (type == 'address') $scope.addressEdit = !$scope.addressEdit;
		if (type == 'phone') $scope.phoneEdit = !$scope.phoneEdit;		
	};

	$scope.fire = function() {
		console.log("hi");
	}
})

