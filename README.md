# todowork

A todo framework


## Install

```bash
npm i todowork
```

or

```bash
yarn add todowork
```

## Usage

```javascript
import { TodoList } from 'todowork';

// Create a new list
const list = new TodoList();

// Add some stuff
list.items.push({
    name: 'Make a to-do app',
    complete: false
});

// Clear list
list.clear();

```
