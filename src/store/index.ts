import { reactive, watchEffect } from 'vue'

export interface Todo {
  id: number
  title: string
  description: string
}

interface Store {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (id: number) => void
  updateTodo: (todo: Todo) => void
}

const initialTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')

export const store = reactive<Store>({
  todos: initialTodos,

  addTodo: (todo: Todo) => {
    store.todos.push(todo)
  },

  removeTodo: (id: number) => {
    store.todos = store.todos.filter((todo) => todo.id !== id)
  },

  updateTodo: (todo: Todo) => {
    store.todos = store.todos.map((oldTodo) => (todo.id === oldTodo.id ? todo : oldTodo))
  }
})

watchEffect(() => {
  localStorage.setItem('todos', JSON.stringify(store.todos))
})
