import TodoStore from './Todo.store'

class RootStore {
	todoStore: typeof TodoStore

	constructor() {
		this.todoStore = TodoStore
	}
}

export default new RootStore()
