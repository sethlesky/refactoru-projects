angular.module('ContestApp', [])

angular.module('ContestApp')
	.controller('contestCtl', ['$scope', '$http', '$sce', function($scope, $http, $sce){
		$scope.greeting = 'Movie Contest'
		// console.log($http)

		$http.get('/getmovies')
			.then(function(returnData){
				$scope.movies = returnData.data
			})

		$scope.sce = $sce;
		$scope.createMovie = function(){
			// console.log($scope.newCostume)

			if ($scope.movies.length < 8) {

				// POST data to server
				$http.post('/addmovie', $scope.newMovie)
					.then(function(returnData){
						console.log( returnData.data )
						$scope.movies = returnData.data
					})
			} else {
				alert('you cant do that sucka!');
			}
		}

		$scope.voteUp = function(index) {
			console.log('vote up', index);

			$http.post('/voteformovie', {index: index})
				.then(function(returnData){
					console.log('voting for movie ', index);
					$scope.movies[index].votes++;
				})
		}

	}])

	// <form action="/submit" method="POST">
