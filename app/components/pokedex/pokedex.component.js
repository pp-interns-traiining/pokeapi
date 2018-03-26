class PokedexController {
  constructor(pokeService, $http, $location) {
    this.page = false;
    this.loading = false;
    this.allPokemon = [];
    this.searchText = '';
    this.evoData = [];
    this.pokeService = pokeService;
    this.$http = $http;
    this.$location = $location;
    this.getAllPokemon();
  }

  $onChanges(change) {
    console.log(change);
  }

  getAllPokemon() {
    console.log('GETTING ALL POKEMON');
    // this.pokeService
    //   .getFromDatabase('//pokeapi.salestock.net/api/v2/pokemon-species')
    //   .then(results => {
    //     this.allPokemon = results;
    //     console.log(results);
    //   });
    this.$http.get('pokemon.json').then(results => {
      console.log('Json:', results);
      this.allPokemon = results.data;
    });
  }

  mapThroughEvoChain(data, evoArray = []) {
    evoArray = [
      ...evoArray,
      ...data.evolves_to.map(poke => {
        return {
          name: poke.species.name,
          id: poke.species.url.match(/(?<!\w)\d+/)[0],
        };
      }),
    ];
    if (data.evolves_to.length) {
      data.evolves_to.map(item => this.mapThroughEvoChain(item, evoArray));
      return evoArray;
    } else {
      this.evoData = evoArray;
      return evoArray;
    }
  }

  getOnePokemon(url) {
    if (this.loading) {
      console.log('Loading, please wait...');
      return;
    } else {
      this.loading = true;
      this.pokeService.getOnePokemon(url).then(
        data => {
          console.log(data);
          this.currentPokemon = data;
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        },
      );
    }
  }

  goToPage(page) {
    this.page = page;
  }

  filterPokemon(input) {
    this.searchText = input;
  }

  currentPokemonButton() {
    console.log(this);
  }

  setCurrentPokemon(pkmn) {
    this.currentPokemon = pkmn;
  }
}

PokedexController.$inject = ['pokeService', '$http', '$location'];

angular.module('pokedex').component('pokedexBase', {
  templateUrl: 'components/pokedex/pokedex.template.html',
  controller: PokedexController,
  bindings: {
    currentPokemon: '<',
  },
});
