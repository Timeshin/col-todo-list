import { ITodoEntity } from '@/types/domain/entities/Todo.type'
import { TodoFromApi } from '@/types/domain/interface/ITodoApi.types'
import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'

import avatarImage from '/avatar.png'

export class Todo implements ITodoEntity {
	readonly id: Id
	readonly userId: Id
	readonly avatar: Avatar
	readonly title: Title
	readonly startDate: string
	readonly endDate: string
	readonly description: string
	complete: boolean

	constructor(user: TodoFromApi) {
		const { id, complete, userId, title } = user
		this.id = id
		this.avatar = avatarImage
		this.complete = complete
		this.userId = userId
		this.title = title
		this.description = faker.lorem.paragraph({ max: 3, min: 1 })
		this.startDate = dayjs(faker.date.anytime()).format('MMM D, hh:mm A')
		this.endDate = dayjs(faker.date.anytime()).add(10, 'days').format('MMM D, hh:mm A')
	}

	toggleComplete() {
		this.complete = !this.complete
	}
}
