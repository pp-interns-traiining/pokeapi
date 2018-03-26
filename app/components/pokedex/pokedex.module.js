angular.module('pokedex', ['ui.router']).config(($stateProvider) => {
  const baseState = {
    name: 'base',
    url: '/pokemon',
    component: 'pokedexBase',
  };

  const pokemonState = {
    parent: 'base',
    name: 'pokemon',
    url: '/{pokemonId}',
    component: 'pokedexPage',
    resolve: {
      currentPokemon: (pokeService, $transition$) =>
        pokeService.getOnePokemon(`//pokeapi.salestock.net/api/v2/pokemon-species/${$transition$.params().pokemonId}`),
    },
  };

  $stateProvider.state(pokemonState);
  $stateProvider.state(baseState);
});
