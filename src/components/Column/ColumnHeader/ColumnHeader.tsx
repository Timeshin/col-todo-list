import { observer } from 'mobx-react-lite'
import { useStores } from '@/mobx'

import plusIcon from '/icons/plus.svg'

import classes from './ColumnHeader.module.scss'

const ColumnHeader = () => {
	const {
		todoStore: { todos }
	} = useStores()

	return (
		<header className={classes.header}>
			<h1 className={classes.title}>Today</h1>
			<div className={classes.indicators}>
				<img className={classes.plusIcon} src={plusIcon} alt='plus' />
				<div className={classes.qty}>{todos.length}</div>
			</div>
		</header>
	)
}

export default observer(ColumnHeader)
