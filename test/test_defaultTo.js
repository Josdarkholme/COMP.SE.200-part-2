import defaultTo from '../src/defaultTo.js';
import { expect } from 'chai';

describe('#defaultTo', function(){
    it('return non-default value', function(){
        expect(defaultTo('a', 'c')).to.equal('a')
    });
    it('return default value', function(){
        expect(defaultTo(undefined, 'c', undefined)).to.equal('c')
    });
    it('return nothing if no default value', function(){
        expect(defaultTo(undefined, undefined)).to.equal(undefined)
    })
});