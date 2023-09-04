import { TodoFromApi } from '@/types/services/todoService.types'
import { ITodo } from '@/types/stores/todoStore.types'
import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import defaultAvatar from '/images/avatar.png'

const extendTodos = (todos: TodoFromApi[]) => {
	const extendedTodos: ITodo[] = todos.map((todo) => ({
		...todo,
		description: faker.lorem.paragraph({ max: 3, min: 1 }),
		startDate: dayjs(faker.date.anytime()).format('MMM D, hh:mm A'),
		endDate: dayjs(faker.date.anytime()).add(10, 'days').format('MMM D, hh:mm A'),
		avatar: defaultAvatar
	}))

	return extendedTodos
}

export default extendTodos
