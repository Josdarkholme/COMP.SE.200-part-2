
import toString from '../src/toString.js';
import { expect } from 'chai';


describe('#toString', function(){
    it('converts an ingeger to a string', function(){
        expect(toString(3)).to.equal('3')
    });
});
