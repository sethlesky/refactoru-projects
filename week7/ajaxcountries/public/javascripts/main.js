angular.module('AjaxApp', []);

angular.module('AjaxApp').controller('AjaxCtl', ['$scope', '$http', function($scope, $http) {
  console.log('here we go!');
  $scope.test = 'working';
  $scope.countries = [];

  $scope.loadCountries = function() {
    console.log('loading countires...');
    $http.get('/countries').success(function(result) {
      $scope.countries = result.countries;
    });
  }

  $scope.search = function() {
    $http.post('/search', {search: $scope.searchInput}).success(function(result) {
      $scope.countries = result;
    })
  }

}]);


