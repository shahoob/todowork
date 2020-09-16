import { TodoList } from "./TodoList";
export interface TodoItem {
    name: string; /** The name of the todo item */
    completed: boolean; /** For determing if that item is completed or not */
    due?: Date; /** The due/deadline date */
    subitems?: TodoItem[]; /** The subitems that is nested under the item */
}