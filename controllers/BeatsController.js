newsAgency.controller('BeatsCtrl', function($scope, BeatsFactory) {
  $scope.BeatsFactory = BeatsFactory;
  $scope.beats = BeatsFactory.beats;
});
