class PokedexSearchBarController {
  constructor() {
    this.searchCategories = ['Name', 'Number', 'Type', 'Color', 'Shape', 'Height', 'Weight'];
    this.orderCategories = ['Dummy', 'Number', 'Type', 'Color', 'Shape', 'Height', 'Weight'];
    console.log('Search bar component ready.');
  }
}

angular.module('pokedex').component('pokedexSearchBar', {
  templateUrl: 'components/pokedex/search-bar/pokedex-search-bar.template.html',
  controller: PokedexSearchBarController,
});
