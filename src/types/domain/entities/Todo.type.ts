import { ITodo } from '@/types/domain/stores/todoStore.types'

export interface ITodoEntity extends ITodo {
	toggleComplete: () => void
}
