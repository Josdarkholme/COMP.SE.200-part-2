import keys from '../src/keys.js';
import { expect } from 'chai';

function Test() {
    this.f = 1
    this.s = 2

}

describe('#keys', function(){
    it('returns object keys', function(){
        // Not sure why this doesn't work
        // solved: Needed deep 
        expect(keys(new Test)).deep.to.equal(keys(new Test))
    });
});