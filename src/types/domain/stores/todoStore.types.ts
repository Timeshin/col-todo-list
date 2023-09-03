import { Todo } from '@/entities/Todo'

export interface ITodo {
	id: Id
	userId: Id
	title: Title
	avatar: Avatar
	description: string
	startDate: string
	endDate: string
	complete: boolean
}

export interface ITodoState {
	todos: ITodo[]
	page: number
}

export interface ITodoActions {
	setTodos: (todos: Todo[]) => void
	addTodos: (todos: Todo[]) => void
	setPage: (page: number) => void
	getNextPageTodos: (page: number) => Promise<void>
	getTodos: () => Promise<void>
}
