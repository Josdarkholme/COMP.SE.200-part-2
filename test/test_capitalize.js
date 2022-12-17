import capitalize from '../src/capitalize.js';
import { expect } from 'chai';

describe('#capitalize', function(){
    it('capitalizes the first character of given string', function(){
        expect(capitalize('jogre')).to.equal('Jogre')
    });
    it('capitalizes the first character while the rest are transformed into lowercase', function(){
        expect(capitalize('GARGOYLE')).to.equal('Gargoyle')
    });
    it('returns nothing if input is undefined', function(){
        expect(capitalize(undefined)).to.equal(undefined)
    });
    it('changes nothing for an integer', function(){
        expect(capitalize(1).to.equal(1))
    })
});