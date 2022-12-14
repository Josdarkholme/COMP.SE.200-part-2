import { expect } from 'chai';
import add from '../src/add.js'


describe('#add', function(){
    it('adds two integers together', function(){

        expect(add(3, 1)).to.equal(3 + 1)
    });

    it('adds two floats together', function(){
        expect(add(3.5, 1.3)).to.equal(3.5 + 1.3)
    });
});
