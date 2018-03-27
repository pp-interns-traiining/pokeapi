describe('Search Bar:', () => {
  let $componentController;

  beforeEach(module('pokedex'));
  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('Instantiates', () => {
    const ctrl = $componentController('pokedexSearchBar');
    expect(ctrl).toBeDefined();
  });

  it('Filters the search list', () => {
    const filterSpy = jasmine.createSpy('filterPokemon');
    const ctrl = $componentController('pokedexSearchBar', null, { filterPokemon: filterSpy });

    ctrl.searchPokemon('Drifloon');

    expect(filterSpy).toHaveBeenCalledWith({ input: 'Drifloon' });
  });
});
