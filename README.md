# todowork [![Maintainability](https://api.codeclimate.com/v1/badges/bc760065be8393c89a1d/maintainability)](https://codeclimate.com/github/shahoob/todowork/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/bc760065be8393c89a1d/test_coverage)](https://codeclimate.com/github/shahoob/todowork/test_coverage) ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/shahoob/todowork?include_prereleases&label=%20&logo=github) ![npm](https://img.shields.io/npm/v/todowork?label=%20&logo=npm) ![NPM](https://img.shields.io/npm/l/todowork?logo=npm) ![David](https://img.shields.io/david/dev/shahoob/todowork)

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

## Docs

Go to [here](https://shahoob.github.io/todowork)
