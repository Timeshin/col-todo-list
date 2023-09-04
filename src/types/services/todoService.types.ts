import { ITodo } from '@/types/stores/todoStore.types'

export type TodoFromApi = Omit<ITodo, 'avatar' | 'startDate' | 'endDate' | 'description'>

export type FetchTodosResponse = TodoFromApi[]

export type IFetchNextTodosPageResponse = TodoFromApi[]
