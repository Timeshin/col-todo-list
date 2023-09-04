import classNames from 'classnames'
import { FC } from 'react'

import classes from './Label.module.scss'

interface ILabel {
	background: string
	color: string
	text: string
	type?: 'default' | 'triangle'
}

const Label: FC<ILabel> = ({ color, text, type = 'default', background }) => (
	<div
		className={classNames(classes.label, type === 'triangle' && classes.triangle)}
		style={{
			background: background,
			color: color
		}}
	>
		{text}
	</div>
)

export default Label
