class PokedexSearchResultsController {
  constructor() {
    this.regExp = /\/(\d+)/i;
    console.log('Search results component ready.');
  }
}

angular.module('pokedex').component('pokedexSearchResults', {
  templateUrl: 'components/pokedex/search-results/pokedex-search-results.template.html',
  controller: PokedexSearchResultsController,
  bindings: {
    allPokemon: '<',
    searchText: '<',
    getOnePokemon: '&',
  },
});
