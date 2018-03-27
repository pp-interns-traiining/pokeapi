class PokedexPageController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.shiny = false;
    console.log('Page component ready.');
  }
  shinyToggle() {
    this.shiny = !this.shiny;
  }
}

PokedexPageController.$inject = ['$rootScope'];

angular.module('pokedex').component('pokedexPage', {
  templateUrl: 'components/pokedex/page/pokedex-page.template.html',
  controller: PokedexPageController,
  bindings: {
    currentPokemon: '<',
  },
});
