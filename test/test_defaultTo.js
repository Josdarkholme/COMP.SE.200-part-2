import defaultTo from '../src/defaultTo.js';
import { expect } from 'chai';

describe('#defaultTo', function(){
    it('return non-default value', function(){
        expect(defaultTo('a', 'c')).to.equal('a')
    });
    it('return default value', function(){
        expect(defaultTo(undefined, 'c')).to.equal('c')
    });
});