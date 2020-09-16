import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

export { TodoList } from './TodoList';

export const from = {
    array(items: TodoItem[]) {
        const list = new TodoList();
        items.forEach(item => {
            list.add(item);
        });

        return list;
    }
};