angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteor',
    function($scope, $stateParams, $meteor) {
        $scope.party = $meteor.object(Parties, $stateParams.partyId, false);

        $scope.save = function() {
            $scope.party.save().then(function(numberOfDocs) {
                console.log('save success doc affected ', numberOfDocs);
            }, function(error) {
                console.log('save error', error);
            });
        };

        $scope.reset = function() {
            $scope.party.reset();
        };
    }
]);