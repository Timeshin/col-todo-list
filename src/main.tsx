import { Provider } from 'mobx-react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RootStore from '@/mobx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider rootStore={RootStore}>
		<App />
	</Provider>
)
