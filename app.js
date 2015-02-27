var newsAgency = angular.module('newsAgency', ['ui.router']);

newsAgency.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('beats', {
    url: "/beats",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.reporters', {
    url: '/:beatId',
    templateUrl: 'partials/beats.reporters.html',
    controller: 'ReporterCtrl'
  });
});
