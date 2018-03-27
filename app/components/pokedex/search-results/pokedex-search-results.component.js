class PokedexSearchResultsController {
  constructor() {
    this.regExp = /(?<!\w)\d+/;
    console.log('Search results component ready.');
  }

  goToId(id) {
    this.goToPokemonId({ id });
  }

  getOne(url) {
    console.log('Getting information from:', url);
    this.getOnePokemon({ url });
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
