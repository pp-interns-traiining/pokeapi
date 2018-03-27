class PokedexController {
  constructor(pokeService, $http, $rootScope, $transitions) {
    this.loading = false;
    this.allPokemon = [];
    this.searchText = '';
    this.evoData = [];
    this.pokeService = pokeService;
    this.$http = $http;
    this.getAllPokemon();

    this.$rootScope = $rootScope;
    $rootScope.page = false;

    $transitions.onStart({}, () => {
      this.loading = true;
    });
    $transitions.onFinish({}, () => {
      this.loading = false;
    });
  }

  getAllPokemon() {
    console.log('GETTING ALL POKEMON');
    // this.pokeService
    //   .getFromDatabase('//pokeapi.salestock.net/api/v2/pokemon-species')
    //   .then(results => {
    //     this.allPokemon = results;
    //     console.log(results);
    //   });
    this.$http.get('pokemon.json').then((results) => {
      console.log('Json:', results);
      this.allPokemon = results.data;
    });
  }

  goToPage(page) {
    this.$rootScope.page = page;
  }

  filterPokemon(input) {
    this.searchText = input;
  }
}

PokedexController.$inject = ['pokeService', '$http', '$rootScope', '$transitions'];

angular.module('pokedex').component('pokedexBase', {
  templateUrl: 'components/pokedex/pokedex.template.html',
  controller: PokedexController,
  bindings: {
    currentPokemon: '<',
  },
});
