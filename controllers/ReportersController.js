newsAgency.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
  $scope.addReporter = function() {
    $scope.beat.reporters.push({
      name: $scope.reporterName,
      years: $scope.yearsEmployed,
      birthday: $scope.reporterBirthday
    });

    $scope.reporterName = null;
    $scope.yearsEmployed = null;
    $scope.reporterBirthday = null;
  }
});
