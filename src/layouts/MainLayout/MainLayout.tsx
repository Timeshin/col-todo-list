import { FC, ReactNode } from 'react'

import logoPart1 from '/images/logoPart1.png'
import logoPart2 from '/images/logoPart2.png'

import classes from './MainLayout.module.scss'

interface IMainLayout {
	children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => (
	<>
		<header className={classes.header}>
			<img src={logoPart1} alt='firstLogo' />
			X
			<img src={logoPart2} alt='secondLogo' />
		</header>
		<main className={classes.content}>{children}</main>
	</>
)

export default MainLayout
