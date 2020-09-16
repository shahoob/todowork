import { TodoItem } from "./TodoItem";

/**
 * Just a list.
 */
export class TodoList {
    /** @ignore @private */
    private _items: TodoItem[];

    /**
     * Adds a To-do item into the list
     * 
     * @param item: TodoItem
     */
    add(item: TodoItem) {
        this._items.push(item);
    }

    /**
     * Removes a to-do item from the list
     * 
     * @param index: number
     */
    remove(index: number) {
        delete this._items[index];
    }

    /**
     * Clears the list
     */
    clear() {
        this._items = [];
    }

    /**
     * @returns TodoItem[]
     */
    get items(): TodoItem[] {
        return this._items;
    }
}