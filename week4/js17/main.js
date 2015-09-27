angular.module('bobsApp', []);

angular.module('bobsApp').controller('bobsController', ['$scope', function($scope){

	$scope.plates=bobsMenu.plates;
	$scope.orders = [];
	$scope.total = 0;

	console.log($scope.plates[0].isGlutenFree(), $scope.plates[0].name)

	$scope.recommendedPlate = function(index, item){
		// console.log(index, item);
		if ($scope.wantsGlutenFree && !item.isGlutenFree()) {
			return 'warning';
		}

		if ($scope.wantsVegan && !item.isVegan()) {
			return 'warning';
		}

		if ($scope.wantsCitrusFree && !item.isCitrusFree()) {
			return 'warning';
		}
	}

	$scope.showOrderBtn = function(index, item) {
		console.log('show it now!');
		console.log(index, item);
		item.showButton = !!!item.showButton;
	}

	$scope.addOrder = function(index, item) {
		console.log('add order here');
		$scope.orders.push(item);

		$scope.orders.forEach(function(item) {
			$scope.total += item.price;
		})

	}




}]);