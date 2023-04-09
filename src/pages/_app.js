import { useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/customBootstrap.scss'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.js')
	}, [])
	return <Component {...pageProps} />
}
