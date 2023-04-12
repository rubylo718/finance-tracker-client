import { useEffect } from 'react'
import '../styles/customBootstrap.scss'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.js')
	}, [])
	return <Component {...pageProps} />
}
