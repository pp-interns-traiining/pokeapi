// PROBABLY DOESN'T WORK

describe('Search Results:', () => {
  let $componentController;

  beforeEach(module('pokedex'));
  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('Instantiates', () => {
    const ctrl = $componentController('pokedexSearchResults');
    expect(ctrl).toBeDefined();
  });

  it('Goes to pokemon by id', () => {
    const goSpy = jasmine.createSpy('goToPokemonId');
    const ctrl = $componentController('pokedexSearchResults', null, { goToPokemonId: goSpy });

    ctrl.goToId(453);

    expect(goSpy).toHaveBeenCalledWith({ id: 453 });
  });
});
