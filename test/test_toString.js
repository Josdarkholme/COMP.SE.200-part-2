
import toString from '../src/toString.js';
import { expect } from 'chai';


describe('#toString', function(){
    it('converts an ingeger to a string', function(){
        expect(toString(3)).to.equal('3')
    });
    it('converts float to string', function(){
        expect(toString(333.111)).to.equal('333.111')
    });
    it('converts string to string', function(){
        expect(toString('string')).to.equal('string')
    });
    it('does not process undefined', function(){
        expect(toString(undefined)).to.equal(undefined)
    });
});
