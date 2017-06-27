import { expect } from 'chai';
import uniqueOrder from '../src/uniqueOrder';

describe('uniqueOrder', () => {

  it('should return [] from ""', () => {
    expect(uniqueOrder('')).to.deep.equal([]);
  });

  it('should return sum [A] from "A"', () => {
    expect(uniqueOrder('A')).to.deep.equal(['A']);
  });

  it('should return sum [A] from "AA"', () => {
    expect(uniqueOrder('AA')).to.deep.equal(['A']);
  });

  it('should return sum [A, B, C, D, A, B] from "AAAABBBCCDAABBB"', () => {
    expect(uniqueOrder('AAAABBBCCDAABBB')).to.deep.equal(['A', 'B', 'C', 'D', 'A', 'B']);
  });

  it('should return sum [A, D] from "AADD"', () => {
    expect(uniqueOrder('AADD')).to.deep.equal(['A', 'D']);
  });

  it('should return sum [1,2,3] from [1,2,3,3]', () => {
    expect(uniqueOrder([1,2,3,3])).to.deep.equal([1,2,3]);
  });

  it('should return sum [a,b] from [a,b,b]', () => {
    expect(uniqueOrder(['a','b','b'])).to.deep.equal(['a', 'b']);
  });

});
