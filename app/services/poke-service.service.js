class PokeService {
  constructor($http) {
    this.$http = $http;
  }

  mapThroughEvoChain(data, evoArray = [], evoData) {
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
      data.evolves_to.map(item => this.mapThroughEvoChain(item, evoArray, evoData));
      return evoArray;
    } else {
      evoData = evoArray;
      return evoArray;
    }
  }

  getFromDatabase(url, results = []) {
    if (!url) return results;
    let res = results;
    return this.$http.get(url).then(response => {
      let loadingValue = Math.ceil(res.length / 20) + 1;
      let loadingMax = Math.ceil(response.data.count / 20);
      console.log(`Searching: ${loadingValue} / ${loadingMax}`);
      res = [...results, ...response.data.results];
      return this.getFromDatabase(response.data.next, res);
    });
  }

  getOnePokemon(url) {
    return this.$http.get(url).then(response => {
      return this.$http.get(response.data.varieties[0].pokemon.url).then(secondaryResponse => {
        // this.pokeService.getOnePokemon(data.evolution_chain.url).then(evolutionData => {
        //   this.mapThroughEvoChain(evolutionData.chain, [
        //     {
        //       name: evolutionData.chain.species.name,
        //       id: evolutionData.chain.species.url.match(/(?<!\w)\d+/)[0],
        //     },
        //   ]);
        return {
          color: response.data.color.name,
          // evolutionChain: this.evoData,
          flavorText: [
            response.data.flavor_text_entries[1].flavor_text,
            response.data.flavor_text_entries[25].flavor_text,
          ],
          genderRate: response.data.gender_rate,
          genus: response.data.genera[0].genus,
          height: secondaryResponse.data.height,
          id: response.data.id,
          number: `000${response.data.id}`.substr(-3),
          name: response.data.name,
          shape: response.data.shape.name,
          sprite: secondaryResponse.data.sprites.front_default,
          stats: {
            attack: secondaryResponse.data.stats[4].base_stat,
            spAtk: secondaryResponse.data.stats[2].base_stat,
            speed: secondaryResponse.data.stats[0].base_stat,
            defense: secondaryResponse.data.stats[3].base_stat,
            spDef: secondaryResponse.data.stats[1].base_stat,
            hp: secondaryResponse.data.stats[5].base_stat,
          },
          types: secondaryResponse.data.types
            .sort((a, b) => a.slot - b.slot)
            .map(item => item.type.name),
          weight: secondaryResponse.data.weight,
        };
      });
    });
  }
}

PokeService.inject = ['$http'];

angular.module('pokedex').service('pokeService', PokeService);
