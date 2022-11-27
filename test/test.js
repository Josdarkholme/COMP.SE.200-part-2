import add from '../src/add.js';
import { expect } from 'chai';

// Example test

describe('#add', function(){
    it('adds two values together', function(){
        expect(add(3, 1)).to.equal(3 + 1)
    });
});
