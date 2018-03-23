class PokedexPageController {
  constructor($routeParams) {
    this.$routeParams = $routeParams;
    console.log('Page component ready.');
  }

  getOne(url) {
    console.log('Getting information from:', url);
    this.getOnePokemon({ url });
  }
  goToId(id) {
    this.goToPokemonId({ id });
  }

  init() {
    this.getOne(`//pokeapi.salestock.net/api/v2/pokemon-species/${this.$routeParams.id}`);
  }
}

PokedexPageController.$inject = ['$routeParams'];

angular.module('pokedex').component('pokedexPage', {
  templateUrl: 'components/pokedex/page/pokedex-page.template.html',
  controller: PokedexPageController,
  bindings: {
    page: '<',
    currentPokemon: '<',
    loadingValue: '<',
    loadingMax: '<',
    getOnePokemon: '&',
    goToPokemonId: '&',
  },
});
