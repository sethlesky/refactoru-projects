angular.module('ContestApp', [])

angular.module('ContestApp')
	.controller('contestCtl', ['$scope', '$http', function($scope, $http){
		$scope.greeting = 'Movie Contest'
		// console.log($http)

		$http.get('/getmovies')
			.then(function(returnData){
				$scope.movies = returnData.data
			})


		$scope.createMovie = function(){
			// console.log($scope.newCostume)

			// POST data to server
			$http.post('/addmovie', $scope.newMovie)
				.then(function(returnData){
					console.log( returnData.data )

					$scope.movies = returnData.data
				})


		}



	}])

	// <form action="/submit" method="POST">
