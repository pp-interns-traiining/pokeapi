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
});
