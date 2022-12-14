
import ceil from '../src/ceil.js';
import { expect } from 'chai';

describe('#ceil', function(){
    it('Rounds up positive float with default precision', function(){
        expect(ceil(2.7)).to.equal(3)
    });
    it('Zero is unaffected', function(){
        expect(ceil(0)).to.equal(0)
    });
    it('Rounds down negative float with default precision', function(){
        expect(ceil(-4.3).to.equal(-4))
    });
});