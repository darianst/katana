import decodeMorse from '../src/decodeMorse';
import { expect } from 'chai';

describe('decodeMorse', () => {

  it('should return correct string', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).to.be.equal('HEY JUDE');
  });

});
