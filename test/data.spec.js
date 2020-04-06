import { medalists, sortData, athleteNameFilter } from '../src/data.js';

describe('medalists', () => {
  it('Es una función', () => {
    expect(typeof medalists).toBe('function');
  });
  it.skip('Debería retornar un `array`', () => {
    expect(medalists()).toBe('array');
  });
});

describe('sortData', () => {
  it('Es una función', () => {
    expect(typeof sortData).toBe('function');
  });
  it.skip('Debería retornar un `array`', () => {
    expect(medalists()).toBe('array');
  });
});

describe('athleteNameFilter', () => {
  it('Es una función', () => {
    expect(typeof athleteNameFilter).toBe('function');
  });
  it.skip('Debería retornar un `array`', () => {
    expect(medalists()).toBe('array');
  });
});
