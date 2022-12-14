import castArray from '../src/castArray.js';
import { expect } from 'chai';

const testArray = [1,2,3,4,5,6,7,8,9,10]

describe('#castArray', function(){
    it('cast integer into array', function(){
        expect(castArray(1)).deep.to.equal([1])
    });
    it('cast array into array', function(){
        expect(castArray(testArray)).deep.to.equal(testArray)
    });
    it('cast nothing into array', function(){
        expect(castArray()).deep.to.equal([undefined])
    });
});