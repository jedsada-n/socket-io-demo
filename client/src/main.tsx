import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { SWRConfig } from 'swr'

import router from './_views/router'
import store from './applications/redux/store'
import './index.css'
import { axiosInstance } from './z/config/api.config'
import './z/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<SWRConfig
			value={{
				fetcher: (url) => axiosInstance.get(url).then((res) => res.data),
			}}
		>
			<RouterProvider router={router} />
		</SWRConfig>
	</Provider>
)
