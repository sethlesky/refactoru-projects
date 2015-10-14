
angular.module('transApp', []);

angular.module('transApp').controller('transCtl', ['$scope', '$http', function($scope, $http) {
  "https://www.googleapis.com/language/translate/v2?q=goodbye&target=es&format=text&source=en&key=AIzaSyBh0bhARwf6vmHYPwX2tDYYXFjSblAqlWQ";
  $scope.title = "Translate App";

  $scope.trans = {};

  $scope.translate = function() {
    console.log('translate run', $scope.trans);

    $http.get("https://www.googleapis.com/language/translate/v2?q="
      + $scope.trans.text + "&target=" + $scope.trans.targLang
      + "&format=text&source=" + $scope.trans.srcLang
      + "&key=AIzaSyCP5tXQ5CBps_hwVs5s9kQqOg91VVCUjc4").then(function(data) {
        console.log(data);
      })

  }



}])
