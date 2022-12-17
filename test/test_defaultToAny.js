import defaultToAny from '../src/defaultToAny.js'
import { expect } from 'chai'

describe('#defaultToAny', function(){
    it('returns first defined element of an array', function(){
        expect(defaultToAny(null, null, undefined, 'test')).to.equal('test')
    });
    it('returns nothing if theres no default', function(){
        expect(defaultToAny(null,null,null)).to.equal(null)
    })
});