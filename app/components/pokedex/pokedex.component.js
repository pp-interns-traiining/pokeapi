class PokedexController {
  constructor(pokeService, $http) {
    this.page = false;
    this.allPokemon = [];
    this.searchText = '';
    this.currentPokemon = '';
    this.evoData = [];
    this.pokeService = pokeService;
    this.$http = $http;
  }

  getAllPokemon() {
    console.log('GETTING ALL POKEMON');
    // this.pokeService
    //   .getFromDatabase('http://pokeapi.salestock.net/api/v2/pokemon-species')
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
    this.pokeService.getOnePokemon(url).then(data => {
      this.pokeService.getOnePokemon(data.varieties[0].pokemon.url).then(secondaryData => {
        this.pokeService.getOnePokemon(data.evolution_chain.url).then(evolutionData => {
          this.mapThroughEvoChain(evolutionData.chain, [
            {
              name: evolutionData.chain.species.name,
              id: evolutionData.chain.species.url.match(/(?<!\w)\d+/)[0],
            },
          ]);
          this.currentPokemon = {
            color: data.color.name,
            evolutionChain: this.evoData,
            flavorText: [
              data.flavor_text_entries[1].flavor_text,
              data.flavor_text_entries[25].flavor_text,
            ],
            genderRate: 'still a mystery',
            genus: data.genera[0].genus,
            height: secondaryData.height,
            id: data.id,
            number: `000${data.id}`.substr(-3),
            name: data.name,
            shape: data.shape.name,
            sprite: secondaryData.sprites.front_default,
            stats: {
              attack: secondaryData.stats[4].base_stat,
              spAtk: secondaryData.stats[2].base_stat,
              speed: secondaryData.stats[0].base_stat,
              defense: secondaryData.stats[3].base_stat,
              spDef: secondaryData.stats[1].base_stat,
              hp: secondaryData.stats[5].base_stat,
            },
            types: secondaryData.types.sort((a, b) => a.slot - b.slot).map(item => item.type.name),
            weight: secondaryData.weight,
          };
          console.log(this.currentPokemon);
        });
      });
    });
  }

  goToPage(page) {
    this.page = page;
  }

  filterPokemon(input) {
    this.searchText = input;
  }
}

PokedexController.$inject = ['pokeService', '$http'];

angular.module('pokedex').component('pokedex', {
  templateUrl: 'components/pokedex/pokedex.template.html',
  controller: PokedexController,
});
