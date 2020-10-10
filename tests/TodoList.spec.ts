import { TodoList } from '../src/TodoList';

const list = new TodoList();

describe('Operations', () => {
    describe('#add()', () => {
        it('should add items to the list', () => {
            list.add({
                name: 'test',
                completed: false
            });
            list.add({
                name: 'go to the toastopia',
                completed: true
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
            expect(list.items).toStrictEqual([undefined, {
                name: 'go to the toastopia',
                completed: true
            }]);
        });
    });
    describe('#clear()', () => {
        it('should clear the list', () => {
            list.clear();
            expect(list.items).toStrictEqual([]);
        });
    });
});