import { useEffect } from 'react'
import { AuthProvider } from '@/contexts/AuthContext'
import '../styles/customBootstrap.scss'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.js')
	}, [])
	return (
		<>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</>
	)
}
