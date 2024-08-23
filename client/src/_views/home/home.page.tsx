import { socket } from '@z/config/socket.config'
import { useEffect, useState } from 'react'

export default function HomePage() {
	const [status, setStatus] = useState('not connected')

	useEffect(() => {
		socket.on('connect', () => {
			setStatus('connected')
		})

		socket.on('message', (message: string) => {
			console.log(message)
		})
	})

	return <div>Connection status: {status}</div>
}
