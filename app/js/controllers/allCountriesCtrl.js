'use strict';

angular
  .module('app')
  .controller('allCountriesCtrl', allCountriesCtrl);

allCountriesCtrl.$inject = ['$scope', 'geonames'];

function allCountriesCtrl($scope, geonames) {
  $scope.sortType = 'countryName';
  $scope.sortReverse = false;
  $scope.searchCountries = '';

  // get all countries
  geonames.getCountryList()
    .then(function(result) {
      //append the DOM
      $scope.countries = result.geonames;
    });
<<<<<<< HEAD

}
=======
}
>>>>>>> 196bb09a1bc34391f8a84caeb2dbec1b4300c28e
