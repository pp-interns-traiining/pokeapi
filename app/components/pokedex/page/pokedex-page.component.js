class PokedexPageController {
  constructor() {
    console.log('Page component ready.');
  }

  getOne(url) {
    console.log('Getting information from:', url);
    this.getOnePokemon({ url });
  }
}

angular.module('pokedex').component('pokedexPage', {
  templateUrl: 'components/pokedex/page/pokedex-page.template.html',
  controller: PokedexPageController,
  bindings: {
    page: '<',
    currentPokemon: '<',
    loadingValue: '<',
    loadingMax: '<',
    getOnePokemon: '&',
  },
});
