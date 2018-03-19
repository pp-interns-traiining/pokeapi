// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'pokedex', 'ui.bootstrap']).config([
  '$locationProvider',
  '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/' });
  },
]);
