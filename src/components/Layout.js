import Head from 'next/head'
import NavComponent from './NavComponent'
import FooterComponent from './FooterComponent'

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Finance Tracker</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container">
				<NavComponent />
				<main>{children}</main>
				<FooterComponent />
			</div>
		</div>
	)
}

export default Layout
