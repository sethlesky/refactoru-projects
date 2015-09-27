angular.module('goldDigger', []);

angular.module('goldDigger').controller('goldCtl', ['$scope', '$document', '$compile',
	function($scope, $document, $compile){
	
	$scope.markers = [];

	$scope.click = function(event) {
		$scope.markers.push({
			top: event.offsetY,
			left: event.offsetX,
			expand: false
		});
	}

	$scope.remove = function(event, index) {
		$scope.markers.splice(index,1);
		console.log(event, index, $scope.markers);
	}

	$scope.expand = function(event, index) {
		$scope.markers[index].expand = true;
	}

	$scope.close = function(event, index) {
		$scope.markers[index].expand = false;
	}
}])

            
