angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
    console.log('home');
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){
    console.log('list apps');
    $scope.delete = function(app, index) {
      console.log('delete it');
      console.log(app);
      $http.post('/deleteapp', {_id: app}).then(function(result) {
        console.log('removing', result.data);
        $scope.apps.splice(index, 1);
      },
      function(err){
        console.log(err);
      })
    }
    $http.get('/getapps').then(function(result) {
      console.log(result.data);
      $scope.apps = result.data;
    },
    function(err){
      console.log(err);
    })
	}]);
