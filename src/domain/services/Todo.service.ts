import { TodoApi } from '@/adapters/TodoApi'
import { Todo } from '@/entities/Todo'

export class TodoService {
	private todoApi: TodoApi

	constructor(todoApi: TodoApi) {
		this.todoApi = todoApi
	}

	async getTodos() {
		const todosResponse = await this.todoApi.fetchTodos()

		return todosResponse.map((todo) => new Todo(todo))
	}

	async getNextTodosPage(page: number) {
		const todosResponse = await this.todoApi.fetchNextTodosPage(page)

		return todosResponse.map((todo) => new Todo(todo))
	}
}

export default new TodoService(new TodoApi())
