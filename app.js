var newAgency = angular.module('newsAgency', ['ui-router']);

newsAgency.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});
