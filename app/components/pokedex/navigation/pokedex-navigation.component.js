class PokedexNavigationController {
  constructor() {
    console.log('Navigation component ready.');
  }
  goToPage1() {
    this.onChange({ page: false });
  }
  goToPage2() {
    this.onChange({ page: true });
  }
  getOne(url) {
    console.log('Getting information from:', url);
    this.getOnePokemon({ url });
  }
}

angular.module('pokedex').component('pokedexNavigation', {
  templateUrl: 'components/pokedex/navigation/pokedex-navigation.template.html',
  controller: PokedexNavigationController,
  bindings: {
    page: '<',
    onChange: '&',
    currentId: '<',
  },
});
