import { TodoList } from '../src/TodoList';

const list = new TodoList();

describe('Operations', () => {
    describe('#add()', () => {
        it('should add items to the list', () => {
            list.add({
                name: 'test',
                completed: false
            });
            expect(list.items).toContainEqual({
                name: 'test',
                completed: false
            });
        });
    });
    describe('#remove()', () => {
        it('should remove the first item', () => {
            list.remove(0);
            expect(list.items).toStrictEqual([undefined]);
        });
    });
});