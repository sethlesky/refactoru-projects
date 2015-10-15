
angular.module('transApp', []);

angular.module('transApp').controller('transCtl', ['$scope', '$http', function($scope, $http) {
  // "https://www.googleapis.com/language/translate/v2?q=goodbye&target=es&format=text&source=en&key=AIzaSyBh0bhARwf6vmHYPwX2tDYYXFjSblAqlWQ";
  $scope.title = "Translate App";

  $scope.trans = {
    srcLang  : 'en',
    targLang : 'es',
    text     : 'hello'
  };

  $scope.translate = function() {
    console.log('translate run', $scope.trans);

    $http.post("/translate", $scope.trans)
      .then(function(result) {
        console.log(result)
        $scope.translatedText = result.data.data.translations[0].translatedText;
      });
  }



}])
