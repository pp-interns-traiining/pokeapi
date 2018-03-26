describe('Navigation:', () => {
  let $componentController;

  beforeEach(module('pokedex'));
  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('Instantiates', () => {
    const ctrl = $componentController('pokedexNavigation');
    expect(ctrl).toBeDefined();
  });

  it('Goes to page 1', () => {
    const onChangeSpy = jasmine.createSpy('onChange');
    const ctrl = $componentController('pokedexNavigation', null, { onChange: onChangeSpy });

    ctrl.goToPage1();

    expect(onChangeSpy).toHaveBeenCalledWith({ page: false });
  });

  it('Goes to page 2', () => {
    const onChangeSpy = jasmine.createSpy('onChange');
    const ctrl = $componentController('pokedexNavigation', null, { onChange: onChangeSpy });

    ctrl.goToPage2();

    expect(onChangeSpy).toHaveBeenCalledWith({ page: true });
  });

  it('Gets one pokemon', () => {
    const getSpy = jasmine.createSpy('getOnePokemon');
    const ctrl = $componentController('pokedexNavigation', null, { getOnePokemon: getSpy });

    ctrl.getOne('testUrl');

    expect(getSpy).toHaveBeenCalledWith({ url: 'testUrl' });
  });

  it('Goes to pokemon by id', () => {
    const goSpy = jasmine.createSpy('goToPokemonId');
    const ctrl = $componentController('pokedexNavigation', null, { goToPokemonId: goSpy });

    ctrl.goToId(123);

    expect(goSpy).toHaveBeenCalledWith({ id: 123 });
  });
});
