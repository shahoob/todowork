import { TodoItem } from "./TodoItem";

/**
 * Just a list.
 */
export class TodoList {
    items: TodoItem[] = [];

    constructor() {
        this.clear = (() => {this.items = []}).bind(this);
    }

    /**
     * Clears the list
     */
    clear() {
        this.items = [];
    }
}