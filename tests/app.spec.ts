import { From } from '../src/app';
import { TodoItem } from '../src/TodoItem';

const sampleTodos: TodoItem[] = [
    {
        name: 'hello',
        completed: true,
        subitems: [
            {
                name: 'world',
                completed: false
            }
        ]
    }
];

describe('From', () => {
    describe('#array()', () => {
        it('should create a list from an array of TodoItems correctly', () => {
            const result = From.array(sampleTodos);
            expect(result.items).toStrictEqual(sampleTodos);
        });
    });
});