import { TodoItem } from "./TodoItem";

/**
 * Just a list.
 */
export class TodoList {
    /** @ignore */
    items: TodoItem[];

    constructor() {
        this.items = [];
    }

    /**
     * Adds a To-do item into the list
     * 
     * @param item: TodoItem
     */
    add(item: TodoItem) {
        this.items.push(item);
    }

    /**
     * Removes a to-do item from the list
     * 
     * @param index: number
     */
    remove(index: number) {
        this.items[index] = undefined;
    }

    /**
     * Clears the list
     */
    clear() {
        this.items = [];
    }
}