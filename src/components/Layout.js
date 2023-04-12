import Head from 'next/head'

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Finance Tracker</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>{children}</main>
		</div>
	)
}

export default Layout
