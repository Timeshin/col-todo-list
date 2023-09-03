import { FetchTodosResponse, IFetchNextTodosPageResponse } from '@/types/domain/interface/ITodoApi.types'

export interface ITodoApi {
	fetchTodos(): Promise<FetchTodosResponse>
	fetchNextTodosPage(page: number): Promise<IFetchNextTodosPageResponse>
}
