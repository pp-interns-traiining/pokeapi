class PokedexPageController {
  constructor() {
    console.log('Page component ready.');
  }

  button() {
    console.log(this);
  }
}

angular.module('pokedex').component('pokedexPage', {
  templateUrl: 'components/pokedex/page/pokedex-page.template.html',
  controller: PokedexPageController,
  bindings: {
    page: '<',
    currentPokemon: '<',
  },
});
