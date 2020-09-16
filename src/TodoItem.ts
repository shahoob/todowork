import { TodoList } from "./TodoList";

export interface TodoItem {
    name: string;
    completed: boolean;
    due?: Date;
    subitems: TodoItem;
}