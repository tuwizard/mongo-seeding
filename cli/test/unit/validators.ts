import { validatePositiveNumber } from '../../src/validators';

describe('Validators', () => {
  it('should validate positive number', () => {
    expect(() => validatePositiveNumber(-100, 'throw')).toThrow();
    expect(() => validatePositiveNumber(0, 'throw')).toThrow();

    expect(() => validatePositiveNumber(undefined, 'throw')).not.toThrow();
    expect(() => validatePositiveNumber(1, 'throw')).not.toThrow();
    expect(() => validatePositiveNumber(10000, 'throw')).not.toThrow();
  });
});
