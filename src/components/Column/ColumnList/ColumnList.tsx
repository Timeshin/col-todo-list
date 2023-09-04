import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/mobx'
import { useRequestStatus } from '@/hooks'

import ColumnItem from '../ColumnItem/ColumnItem'

import classes from './ColumnList.module.scss'

const ColumnList = () => {
	const { todoStore } = useStores()
	const { ref, inView } = useInView()
	const [getTodos, { isLoading: isTodosLoading, isError: isTodosError }] = useRequestStatus(todoStore.getTodos)
	const [getNextPageTodos, { isLoading: isNextTodosLoading, isError: isNextTodosError }] = useRequestStatus(() =>
		todoStore.getNextPageTodos(todoStore.page + 1)
	)

	useEffect(() => {
		getTodos()
	}, [getTodos])

	useEffect(() => {
		if (!inView || isTodosLoading || isNextTodosLoading || todoStore.todos.length === 200) return

		getNextPageTodos()
	}, [getNextPageTodos, inView, isNextTodosLoading, isTodosLoading, todoStore.todos])

	return (
		<div className={classes.container}>
			<div className={classes.content}>
				{todoStore.todos.map((todo) => (
					<ColumnItem key={todo.id} todo={todo} />
				))}
			</div>
			{!isTodosError && !isNextTodosError && !isTodosLoading && !isNextTodosLoading && <div ref={ref} />}
			{(isTodosError || isNextTodosError) && <h3>Error</h3>}
			{(isTodosLoading || isNextTodosLoading) && <h3>Loading...</h3>}
		</div>
	)
}

export default observer(ColumnList)
