import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

export { TodoList };

/**
 * A helper for creating a list from something (like an array)
 */
export namespace From {
    /**
     * Creates a list from an array of [[`TodoItem`]]s
     * 
     * @param items: TodoItem[]
     * @returns TodoList
     */
    export function array(items: TodoItem[]) {
        const list = new TodoList();
        items.forEach(item => list.items.push(item));

        return list;
    }
};