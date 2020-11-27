import { From } from '../src/app';

import { sampleArrayList as sampleTodos } from '../testSamples/SampleTestingList'

describe('From', () => {
    describe('#array()', () => {
        it('should create a list from an array of TodoItems correctly', () => {
            const result = From.array(sampleTodos);
            expect(result.items).toStrictEqual(sampleTodos);
        });
    });
});