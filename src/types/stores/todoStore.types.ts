export interface ITodo {
	id: Id
	userId: Id
	title: Title
	avatar: Avatar
	description: string
	startDate: string
	endDate: string
	completed: boolean
}

export interface ITodoState {
	todos: ITodo[]
	page: number
}

export interface ITodoActions {
	setTodos: (todos: ITodo[]) => void
	addTodos: (todos: ITodo[]) => void
	toggleTodoComplete: (id: number) => void
	setPage: (page: number) => void
	getNextPageTodos: (page: number) => Promise<void>
	getTodos: () => Promise<void>
}
