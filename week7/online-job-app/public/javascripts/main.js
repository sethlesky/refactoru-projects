angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
    console.log('home');
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){
    console.log('list apps');
    $scope.delete = function(app) {
      console.log('delete it');
      console.log(app);
    }
    $http.get('/getapps').then(function(result) {
      console.log(result.data);
      $scope.apps = result.data;
    },
    function(err){
      console.log(err);
    })
	}]);
