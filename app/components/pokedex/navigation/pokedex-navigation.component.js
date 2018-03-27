class PokedexNavigationController {
  constructor($rootScope, $location) {
    this.$rootScope = $rootScope;
    this.$location = $location;

    console.log('Navigation component ready.');
  }
  goToPage1() {
    this.$rootScope.page = false;
  }
  goToPage2() {
    this.$rootScope.page = true;
  }
}

PokedexNavigationController.$inject = ['$rootScope', '$location'];

angular.module('pokedex').component('pokedexNavigation', {
  templateUrl: 'components/pokedex/navigation/pokedex-navigation.template.html',
  controller: PokedexNavigationController,
});
