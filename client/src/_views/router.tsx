import HomePage from '@_views/home/home.page'
import RootLayout from '@_views/root.layout'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		children: [
			{
				element: <HomePage />,
				path: '/home',
			},
		],
		element: <RootLayout />,
	},
	{
		element: <Navigate to="/home" />,
		path: '*',
	},
])

export default router
