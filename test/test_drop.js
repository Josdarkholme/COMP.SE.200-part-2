import drop from '../src/drop.js';
import { expect } from 'chai';

describe('#drop', function(){
    it('remove first element of array', function(){
        expect(drop([1,2,3])).deep.equal([2,3])
    });
    it('remove all array elements', function(){
        expect(drop([1,2,3,4,5,6], 20)).deep.equal([])
    });
    it('remove no element', function(){
        expect(drop([1,2,3], 0)).deep.equal([1,2,3])
    });

});
