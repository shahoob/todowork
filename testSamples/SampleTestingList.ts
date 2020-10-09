import { TodoList } from "../src/app";
import { TodoItem } from "../src/TodoItem";
/** @ignore */
export const sampleArrayList: TodoItem[] = [
    {
        name: 'Make some code',
        completed: true,
        subitems: [
            {
                name: 'TodoItem',
                completed: true
            },
            {
                name: 'TodoList',
                completed: true
            }
        ]
    },
    {
        name: 'Write tests',
        completed: true,
        subitems: [
            {
                name: 'TodoItem',
                completed: false
            },
            {
                name: 'TodoList',
                completed: false
            },
            {
                name: 'app.ts',
                completed: true
            }
        ]
    }
]

/**
 * For testing only
 * 
 * @ignore
 */
export default class SampleTestingList extends TodoList {
    constructor() {
        super();
        this.items = sampleArrayList;
    }
}