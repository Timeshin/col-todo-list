import { ITodoEntity } from '@/types/domain/entities/Todo.type'

export class TodoEvaluation {
	private todo: ITodoEntity

	constructor(todo: ITodoEntity) {
		this.todo = todo
	}

	toggleComplete() {
		this.todo.toggleComplete()
	}
}
