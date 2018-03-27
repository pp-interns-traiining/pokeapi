describe('Pokeservice:', () => {

  let pokeService, httpBackend;

  beforeEach(module('pokedex'));

  beforeEach(inject(function (_pokeService_, $httpBackend) {
    pokeService = _pokeService_;
    httpBackend = $httpBackend;
  }));

  it('Instantiates', () => {
    expect(pokeService).toBeDefined();
    expect(pokeService.getOnePokemon).not.toBeNull();
    expect(typeof pokeService.getOnePokemon).toBe('function');
  });

  it('Gets one Pokemon', () => {
    const testPokemon = { pokemon: 'Charizard' };

    // When you get the testing url, respond with the object mock
    httpBackend
      .whenGET('testing')
      .respond(testPokemon);

    pokeService
      .getOnePokemon('testing')
      .then((response) => {
        expect(response).toEqual(testPokemon);
      });

    // note: This is important
    httpBackend.flush();
  });

});
