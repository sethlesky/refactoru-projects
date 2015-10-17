angular.module('transApp', ['ui.router']);

angular.module('transApp').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/translate');

  $stateProvider
    .state('translate', {
      url: '/translate',
      templateUrl: '../html/partial-translate.html'
    })

    .state('quiz', {
      url: '/quiz',
      templateUrl: '../html/partial-quiz.html'
    });

});

angular.module('transApp').controller('transCtl', ['$scope', '$http', function($scope, $http) {
  $scope.title = "Translate App";
  $scope.quiz = {
    words : [],
    started : false,
    language : ''
  };

  $scope.trans = {
    srcLang: 'en',
    targLang: 'es',
    text: 'hello'
  };

  $scope.translate = function() {
    console.log('translate run', $scope.trans);

    $http.post("/translate", $scope.trans)
      .then(function(result) {
        console.log(result)
        $scope.translatedText = result.data.data.translations[0].translatedText;
      });
  }

  $scope.setLanguage = function() {
    console.log('starting quiz');
    $scope.quiz.started = true;
  }


}])
