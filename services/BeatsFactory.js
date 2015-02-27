newsAgency.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addBeat = function(beatName) {
    factory.beats.push({
      name: beatName
    });
  };
});
