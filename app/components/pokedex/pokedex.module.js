angular.module('pokedex', ['ui.router']).config(($stateProvider) => {
  const pokemonState = {
    name: 'pokemon',
    url: '/pokemon/{id}',
    component: 'pokedex-page',
    resolve: {
      currentPokemon: (pokeService, $transition$) => pokeService.getOnePokemon(`//pokeapi.salestock.net/api/v2/pokemon-species/${$transition$.params().id}`),
    },
  };

  $stateProvider.state(pokemonState);
});
