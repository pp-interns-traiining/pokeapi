// PROBABLY DOESN'T WORK
//
describe('Pokedex Base:', () => {
  let $componentController;

  beforeEach(module('pokedex'));
  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('Instantiates', () => {
    const ctrl = $componentController('pokedexBase');
    expect(ctrl).toBeDefined();
  });

  it('Populates a list of pokemon', () => {
    const ctrl = $componentController('pokedexBase');

    ctrl.getAllPokemon().then(() => {
      expect(ctrl.allPokemon.length).toBe(721);
    });
  });

  it('Takes in a word to filter by', () => {
    const ctrl = $componentController('pokedexBase');

    ctrl.filterPokemon('Drifloon')
    expect(ctrl.searchText).toBe('Drifloon');
  })
});
