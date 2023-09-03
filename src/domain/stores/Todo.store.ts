import { Todo } from '@/entities/Todo'
import TodoService from '@/services/Todo.service'
import { ITodo, ITodoActions, ITodoState } from '@/types/domain/stores/todoStore.types'
import { makeAutoObservable } from 'mobx'

class TodoStore implements ITodoState, ITodoActions {
	todos: ITodo[]
	page = 0

	constructor() {
		makeAutoObservable(this)
	}

	setTodos(todos: ITodo[]) {
		this.todos = todos
	}

	addTodos(todos: Todo[]) {
		this.todos = [...this.todos, ...todos]
	}

	setPage(page: number) {
		this.page = page
	}

	async getTodos() {
		const todos = await TodoService.getTodos()

		this.setTodos(todos)
	}

	async getNextPageTodos(page: number) {
		const todos = await TodoService.getNextTodosPage(page)

		this.addTodos(todos)
	}
}

export default new TodoStore()
