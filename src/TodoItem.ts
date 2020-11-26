export interface TodoItem {
    /** The name of the todo item */
    name: string;
    /** For determing if that item is completed or not */
    completed: boolean;
    /** The due/deadline date */
    due?: Date;
    /** The subitems that is nested under the item */
    subitems?: TodoItem[];
    /** Anything you want in there ;) */
    extra?: {
        [type in string|number]: any
    }
}