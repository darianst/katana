import { expect } from 'chai';
import sumDigits from '../src/sumDigits';

describe('sumDigits', () => {

  it('should return sum 7 of 16', () => {
    expect(sumDigits(16)).to.be.equal(7);
  });

  it('should return sum 6 of 195', () => {
    expect(sumDigits(195)).to.be.equal(6);
  });

  it('should return sum 2 of 992', () => {
    expect(sumDigits(992)).to.be.equal(2);
  });

  it('should return sum 9 of 999999999999', () => {
    expect(sumDigits(999999999999)).to.be.equal(9);
  });

  it('should return sum 9 of 167346', () => {
    expect(sumDigits(167346)).to.be.equal(9);
  });

  it('should return sum 0 of 0', () => {
    expect(sumDigits(0)).to.be.equal(0);
  });

});
