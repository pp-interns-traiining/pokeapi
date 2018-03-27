class PokedexSearchBarController {
  constructor() {
    console.log('Search bar component ready.');
  }

  searchPokemon(input) {
    this.filterPokemon({ input });
  }
}

angular.module('pokedex').component('pokedexSearchBar', {
  templateUrl: 'components/pokedex/search-bar/pokedex-search-bar.template.html',
  controller: PokedexSearchBarController,
  bindings: {
    filterPokemon: '&',
  },
});
