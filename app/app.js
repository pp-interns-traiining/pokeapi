// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'pokedex', 'ui.bootstrap', 'ui.router']).config([
  '$locationProvider',
  '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
      template: '<pokedex></pokedex>',
    });

    $routeProvider.when('/pokemon/:id', {
      template: '<pokedex></pokedex>',
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  },
]);
