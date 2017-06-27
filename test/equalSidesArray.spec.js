import equalSidesArray from '../src/equalSidesArray';
import { expect } from 'chai';

describe('equalSidesArray', () => {

  it('should find Even Index 3 on [1,2,3,4,3,2,1]', () => {
    expect(equalSidesArray([1,2,3,4,3,2,1])).to.be.equal(3);
  });

  it('should find Even Index 1 on [1,100,50,-51,1,1]', () => {
    expect(equalSidesArray([1,100,50,-51,1,1])).to.be.equal(1);
  });
  it('should find Even Index -1 on [1,2,3,4,5,6]', () => {
    expect(equalSidesArray([1,2,3,4,5,6])).to.be.equal(-1);
  });
  it('should find Even Index 3 on [20,10,30,10,10,15,35]', () => {
    expect(equalSidesArray([20,10,30,10,10,15,35])).to.be.equal(3);
  });

});
