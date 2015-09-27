angular.module('quoteApp', ['ngMaterial', 'ngMdIcons', 'ngRating']);

angular.module('quoteApp').controller('quoteCtl', ['$scope', '$mdDialog', 'quoteFactory',
    function($scope, $mdDialog, quoteFactory) {
    	$scope.quotes = quoteFactory.quotes;
    	$scope.refreshVisible = false;
    	$scope.deleted = [];

        $scope.createNote = function() {
            console.log('Create Note');
        }

        $scope.deleteQuote = function(event, index) {
        	console.log("delete it", index);
        	$scope.deleted.push($scope.quotes.splice(index,1)[0]);
        	console.log($scope.deleted);
        }

        $scope.undoDelete = function() {
        	var quote = $scope.deleted.pop();
        	quoteFactory.addQuote(quote.name, quote.quote);
        }

        $scope.editQuote = function(event, index) {
        	$scope.showAdvanced(event, index);
        }

        $scope.filterName = function(name) {
        	console.log('name');
        	$scope.nameToFilter = name;
        	$scope.refreshVisible = true;
        }

        $scope.resetFilter = function(name) {
			$scope.refreshVisible = false;
			$scope.nameToFilter = '';
        }

        $scope.randomQuote = function(event) {
        	$scope.random = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
        	$scope.showConfirm(event, $scope.random);

        }

        $scope.showAdvanced = function(ev, index) {
        	console.log(quoteFactory);
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'createNote.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {
                	quote: $scope.quotes[index],
                	index: index
                },
                clickOutsideToClose: true,
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

        $scope.showConfirm = function(ev, quote) {
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
              .title(quote.name)
              .content(quote.quote)
              .ariaLabel('Lucky day')
              .targetEvent(ev)
              .ok('Thanks!')
          $mdDialog.show(confirm).then(function() {
              $scope.status = 'You decided to get rid of your debt.';
          }, function() {
              $scope.status = 'You decided to keep your debt.';
          });
        };
    }
])

function DialogController($scope, $mdDialog, quoteFactory, quote, index) {
	$scope.quote = quote;
    $scope.saveQuote = function() {
    	if (quote) {
    		console.log('were editing');
    		quoteFactory.quotes[index].name = $scope.quote.name;
    		quoteFactory.quotes[index].quote = $scope.quote.quote;
    	} else {
    		quoteFactory.addQuote($scope.quote.name, $scope.quote.quote);
    	}
        $mdDialog.hide();
    }
	$scope.cancel = function(event) {
	    $mdDialog.cancel();
	}
}