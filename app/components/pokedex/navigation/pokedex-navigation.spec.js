describe('Navigation:', () => {
  let $componentController;
  let $rootScope;

  beforeEach(module('pokedex'));
  beforeEach(inject((_$componentController_, _$rootScope_) => {
    $componentController = _$componentController_;
    $rootScope = _$rootScope_;
  }));

  it('Instantiates', () => {
    const ctrl = $componentController('pokedexNavigation');
    expect(ctrl).toBeDefined();
  });

  it('Goes to page 1', () => {
    const ctrl = $componentController('pokedexNavigation');

    ctrl.goToPage1();

    expect($rootScope.page).toBe(false);
  });

  it('Goes to page 2', () => {
    const ctrl = $componentController('pokedexNavigation');

    ctrl.goToPage2();

    expect($rootScope.page).toBe(true);
  });
});
