import { FC } from 'react'
import { useStores } from '@/mobx'
import { observer } from 'mobx-react-lite'
import { ITodo } from '@/types/stores/todoStore.types'
import classNames from 'classnames'

import LinesEllipsis from 'react-lines-ellipsis'

import classes from './ColumnItem.module.scss'
import Label from './Label/Label'

interface IColumnItem {
	todo: ITodo
}

const ColumnItem: FC<IColumnItem> = ({ todo: { avatar, completed, description, endDate, id, startDate, title } }) => {
	const { todoStore } = useStores()

	const toggleCompletedTodoHandler = () => {
		todoStore.toggleTodoComplete(id)
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.card}>
				<label className={classes.header} htmlFor={String(id)}>
					<input
						onChange={toggleCompletedTodoHandler}
						className={classes.checkbox}
						id={String(id)}
						type='checkbox'
						defaultChecked={completed}
					/>
					<h4 className={classNames(classes.title, completed && classes.completed)}>
						<LinesEllipsis text={title} maxLine='3' ellipsis='...' trimRight basedOn='letters' />
					</h4>
				</label>
				<div className={classes.content}>
					<div className={classes.dates}>
						<p className={classes.start}>{startDate}</p>
						<p className={classes.end}>{endDate}</p>
					</div>
					<LinesEllipsis text={description} maxLine='1' ellipsis='...' trimRight basedOn='letters' />
					<footer className={classes.footer}>
						<div className={classes.tags}>
							<Label color='#fff' background='#B233A6' text='Entity title' />
							<Label color='#616C82' background='#EBEEF6' text='Front-end' type='triangle' />
						</div>
						<img className={classes.avatar} src={avatar} alt='avatar' />
					</footer>
				</div>
			</div>
		</div>
	)
}

export default observer(ColumnItem)
