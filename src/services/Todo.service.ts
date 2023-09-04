import { FetchTodosResponse, IFetchNextTodosPageResponse } from '@/types/services/todoService.types'
import { BaseApi } from './Base.service'

class TodoService extends BaseApi {
	async getTodos() {
		const { data } = await this.api<FetchTodosResponse>('todos', {
			params: {
				...this.defaultParams
			}
		})

		return data
	}

	async getNextTodosPage(page: number) {
		const { data } = await this.api<IFetchNextTodosPageResponse>('todos', {
			params: {
				...this.defaultParams,
				_page: page
			}
		})

		return data
	}
}

export default new TodoService()
