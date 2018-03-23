class PokedexPageController {
  constructor($routeParams) {
    this.$routeParams = $routeParams;
    console.log('Page component ready.');
  }

  goToId(id) {
    this.goToPokemonId({ id });
  }

  currentPokemonButton() {
    console.log(this);
  }
}

PokedexPageController.$inject = ['$routeParams'];

angular.module('pokedex').component('pokedexPage', {
  templateUrl: 'components/pokedex/page/pokedex-page.template.html',
  controller: PokedexPageController,
  bindings: {
    page: '<',
    currentPokemon: '<',
    goToPokemonId: '&',
  },
});
