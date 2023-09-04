import TodoService from '@/services/Todo.service'
import { ITodo, ITodoActions, ITodoState } from '@/types/stores/todoStore.types'
import { makeAutoObservable } from 'mobx'
import { extendTodos } from '@/utils'
import { RootStore } from '.'

class TodoStore implements ITodoState, ITodoActions {
	rootStore: RootStore

	todos: ITodo[] = []
	page = 1

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore
		makeAutoObservable(this)
	}

	setTodos(todos: ITodo[]) {
		this.todos = todos
	}

	addTodos(todos: ITodo[]) {
		this.todos = [...this.todos, ...todos]
	}

	toggleTodoComplete(id: number) {
		const newTodos = this.todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed
				}
			}

			return todo
		})

		this.todos = newTodos
	}

	setPage(page: number) {
		this.page = page
	}

	getTodos = async () => {
		const todos = await TodoService.getTodos()

		const extendedTodos = extendTodos(todos)

		this.setTodos(extendedTodos)
	}

	getNextPageTodos = async (page: number) => {
		const todos = await TodoService.getNextTodosPage(page)

		const extendedTodos = extendTodos(todos)

		this.addTodos(extendedTodos)
		this.setPage(page)
	}
}

export default TodoStore
