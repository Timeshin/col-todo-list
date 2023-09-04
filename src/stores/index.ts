import { createContext, useContext } from 'react'
import TodoStore from './Todo.store'

export class RootStore {
	todoStore: TodoStore

	constructor() {
		this.todoStore = new TodoStore(this)
	}
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)
