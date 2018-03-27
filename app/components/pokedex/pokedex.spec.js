// PROBABLY DOESN'T WORK

describe('Search Results:', () => {
  let $componentController;
  let httpBackend;

  beforeEach(module('pokedex'));
  beforeEach(inject((_$componentController_, $httpBackend) => {
    $componentController = _$componentController_;
    httpBackend = $httpBackend;
  }));

  it('Instantiates', () => {
    const ctrl = $componentController('pokedex');
    expect(ctrl).toBeDefined();
  });

  it('Goes to pokemon by id', () => {
    const ctrl = $componentController('pokedex');
    const allPokemon = 721;

    httpBackend.whenGet('testing').respond(allPokemon);

    ctrl.getAllPokemon('testing').then((response) => {
      expect(response.length).toEqual(allPokemon);
    });

    httpBackend.flush();
  });
});
