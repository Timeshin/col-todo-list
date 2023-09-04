import ColumnHeader from './ColumnHeader/ColumnHeader'
import ColumnList from './ColumnList/ColumnList'

import classes from './Column.module.scss'

const Column = () => (
	<div className={classes.column}>
		<ColumnHeader />
		<ColumnList />
	</div>
)

export default Column
