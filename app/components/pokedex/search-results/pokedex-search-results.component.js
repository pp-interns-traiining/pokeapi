class PokedexSearchResultsController {
  constructor() {
    this.sortedResults = [
      { name: 'pikachu', number: '25' },
      { name: 'raichu', number: '26' },
      { name: 'croagunk', number: '453' },
      { name: 'arceus', number: '493' },
    ];
    console.log('Search results component ready.');
  }
}

angular.module('pokedex').component('pokedexSearchResults', {
  templateUrl: 'components/pokedex/search-results/pokedex-search-results.template.html',
  controller: PokedexSearchResultsController,
});
