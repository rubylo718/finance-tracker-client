import Link from 'next/link'

const NavComponent = () => {
	return (
		<div className="container">
			<nav
				className="navbar fixed-top"
				style={{ backgroundColor: '#e3f2fd' }}
			>
				<div className="container-fluid">
					<Link className="navbar-brand" href="/">
						Finance Tracker
					</Link>
					<button className="btn btn-light" role="button">
						Logout
					</button>
				</div>
			</nav>
		</div>
	)
}

export default NavComponent
