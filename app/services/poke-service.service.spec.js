describe('Pokeservice:', () => {
  let pokeService,
    httpBackend;

  beforeEach(module('pokedex'));

  beforeEach(inject((_pokeService_, $httpBackend) => {
    pokeService = _pokeService_;
    httpBackend = $httpBackend;
  }));

  it('Instantiates', () => {
    expect(pokeService).toBeDefined();
    expect(pokeService.getOnePokemon).not.toBeNull();
    expect(typeof pokeService.getOnePokemon).toBe('function');
  });

  it('Gets one Pokemon', () => {
    const testPokemon = {
      color: 'red',
      evolutionChain: [
        {
          name: 'rotom',
          id: '/479',
          $$hashKey: 'object:1548',
        },
      ],
      flavorText: [
        'Its body is composed of plasma. It is known to\ninfiltrate electronic devices and wreak havoc.',
        'Research continues on this Pokémon, which could\nbe the power source of a unique motor.',
      ],
      genderRate: -1,
      genus: 'Plasma',
      height: 3,
      id: 479,
      number: '479',
      name: 'rotom',
      shape: 'ball',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
      shiny_sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/479.png',
      stats: {
        attack: 50,
        spAtk: 95,
        speed: 91,
        defense: 77,
        spDef: 77,
        hp: 50,
      },
      types: ['electric', 'ghost'],
      weight: 3,
    };

    // When you get the testing url, respond with the object mock
    httpBackend.whenGET('testing').respond(testPokemon);

    pokeService.getOnePokemon('testing').then((response) => {
      expect(response).toEqual(testPokemon);
    });

    // note: This is important
    httpBackend.flush();
  });
});
