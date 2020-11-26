import { TodoList } from '../src/TodoList';

const list = new TodoList();

describe('Operations', () => {
    describe('#clear()', () => {
        it('should clear the list', () => {
            list.clear();
            expect(list.items).toStrictEqual([]);
        });
    });
});