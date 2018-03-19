class PokedexPageController {
  constructor() {
    this.page = false;
    console.log('Page component ready.');
  }
}

angular.module('pokedex').component('pokedexPage', {
  templateUrl: '/components/pokedex/page/pokedex-page.template.html',
  controller: PokedexPageController,
});
