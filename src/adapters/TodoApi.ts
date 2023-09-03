import { ITodoApi } from '@/interfaces/ITodoApi'
import { FetchTodosResponse, IFetchNextTodosPageResponse } from '@/types/domain/interface/ITodoApi.types'
import { BaseApi } from './BaseApi'

export class TodoApi extends BaseApi implements ITodoApi {
	async fetchTodos() {
		const { data } = await this.api<FetchTodosResponse>('todos', {
			params: {
				...this.defaultParams
			}
		})

		return data
	}

	async fetchNextTodosPage(page: number) {
		const { data } = await this.api<IFetchNextTodosPageResponse>('todos', {
			params: {
				...this.defaultParams,
				page: page
			}
		})

		return data
	}
}
