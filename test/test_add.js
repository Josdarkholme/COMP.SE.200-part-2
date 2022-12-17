import { expect } from 'chai';
import add from '../src/add.js'


describe('#add', function(){
    it('adds two integers together', function(){

        expect(add(3, 1)).to.equal(3 + 1)
    });

    it('adds two floats together', function(){
        expect(add(3.5, 1.3)).to.equal(3.5 + 1.3)
    });
    it('adds two negative floats together', function(){
        expect(add(-1.1555, -45151.2)).to.equal(-45152.3555)
    });
    it('add two zeroes to equal 0', function(){
        expect(add(0,0)).to.equal(0)
    })
});
