class PokedexNavigationController {
  constructor() {
    this.previousEntry = '452';
    this.nextEntry = '454';
    console.log('Navigation component ready.');
  }
}

angular.module('pokedex').component('pokedexNavigation', {
  templateUrl: 'components/pokedex/navigation/pokedex-navigation.template.html',
  controller: PokedexNavigationController,
});
