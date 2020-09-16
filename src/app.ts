import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

export { TodoList } from './TodoList';

/**
 * A helper for creating a list from something (like an array)
 */
export const from = {
    /**
     * Creates a list from an array of [[`TodoItem`]]s
     * 
     * @param items: TodoItem[]
     * @returns TodoList
     */
    array(items: TodoItem[]) {
        const list = new TodoList();
        items.forEach(item => {
            list.add(item);
        });

        return list;
    }
};