class PokeService {
  constructor($http) {
    this.loadingValue = 0;
    this.loadingMax = 100;
    this.$http = $http;
  }

  getFromDatabase(url, results = []) {
    if (!url) return results;
    let res = results;
    return this.$http.get(url).then((response) => {
      this.loadingValue = Math.ceil(res.length / 20) + 1;
      this.loadingMax = Math.ceil(response.data.count / 20);
      console.log(`Searching: ${this.loadingValue} / ${this.loadingMax}`);
      res = [...results, ...response.data.results];
      return this.getFromDatabase(response.data.next, res);
    });
  }

  getOnePokemon(url) {
    return this.$http.get(url).then(response => response.data);
  }
}

PokeService.inject = ['$http'];

angular.module('pokedex').service('pokeService', PokeService);
