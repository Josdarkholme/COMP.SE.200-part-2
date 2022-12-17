import eq from '../src/eq.js';
import { expect } from 'chai';

describe('#eq', function(){
    it('compare two equal integers', function(){
        expect(eq(40, 40)).to.equal(true)
    });
    it('compare two non-equal integers', function(){
        expect(eq(40, -12)).to.equal(false)
    });
    it('compare two equal floats', function(){
        expect(eq(0.0001, 0.0001)).to.equal(true)
    });
    it('compare two non-equal floats', function(){
        expect(eq(0.0001, 0.00021)).to.equal(false)
    });
    it('compare two large floats', function(){
        expect(eq(1243321.0, 1243321.0)).to.equal(true)
    });
    it('compare two large integers', function(){
        expect(eq(10**5200000, 10**5200000)).to.equal(true)
    })

});