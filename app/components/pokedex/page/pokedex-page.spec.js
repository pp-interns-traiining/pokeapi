describe('Page:', () => {
  let $componentController;

  beforeEach(module('pokedex'));
  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('Instantiates', () => {
    const ctrl = $componentController('pokedexPage');

    expect(ctrl).toBeDefined();
    expect(ctrl.shiny).toBe(false);
  });

  it('Toggles shiny between true and false', () => {
    const ctrl = $componentController('pokedexPage');

    ctrl.shinyToggle();
    expect(ctrl.shiny).toBe(true);
    ctrl.shinyToggle();
    expect(ctrl.shiny).toBe(false);
  });
});
