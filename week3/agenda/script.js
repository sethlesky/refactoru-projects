angular.module('calender', []);

angular.module('calender').controller('calCtl', ['$scope', '$window', 
	function($scope, $window){

	$scope.days = [];
	$scope.today = new Date();

	var lastDay = 0;

	$scope.addDays = function() {
		for (var i = lastDay; i < lastDay + 20; i++) {
			var nextDay = new Date($scope.today);
			nextDay.setDate($scope.today.getDate() + i);
			$scope.days.push(nextDay);
		}
		lastDay = lastDay + 20;
	}

	$scope.addDays();

	$scope.showInput = function(event, index) {
		console.log(event, index);
		$scope.days[index].showInput = true;
	}

	$scope.addNote = function(event, index, note) {
		console.log(event, index, note);
		if(!$scope.days[index].notes) {
			$scope.days[index].notes = [];
		}
		$scope.days[index].notes.push(note);
		$scope.days[index].newNote = '';
		$scope.days[index].showInput = false;
	}

	$scope.deleteNote = function(event, index, parentIndex) {
		console.log(index, parentIndex);
		$scope.days[parentIndex].notes.splice(index,1);
	}

	$scope.editNote = function(event, index, parentIndex) {
		console.log('boop');
		var edit = prompt("Edit your note", $scope.days[parentIndex].notes[index]);
		$scope.days[parentIndex].notes[index] = edit;
	}

	var scrollPercent = function() {
		return ((document.body.scrollTop + window.innerHeight) / document.body.clientHeight);
	}

    angular.element($window).bind("scroll", function() {
        console.log((document.body.scrollTop + window.innerHeight) / document.body.clientHeight);
        $scope.$apply();
        if (scrollPercent() > .8) {
        	$scope.addDays();
        }

    });

}])