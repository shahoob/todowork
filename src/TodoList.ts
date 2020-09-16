import { TodoItem } from "./TodoItem";

export class TodoList {
    private _items: TodoItem[];

    add(item: TodoItem) {
        this._items.push(item);
    }

    remove(index: number) {
        delete this._items[index];
    }

    clear() {
        this._items = [];
    }

    get items() {
        return this._items;
    }
}