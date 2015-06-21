'use strict';

angular
  .module('app')
  .config(config);

  config.$inject = ['$locationProvider', '$routeProvider'];

  function config($locationProvider, $routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/views/home.html"
      })
      .when("/countries", {
        templateUrl: "/views/allCountries.html",
        controller: "allCountriesCtrl"
      })
      .when("/countries/:countryCode", {
        templateUrl: "/views/country.html",
        controller: 'countryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  };