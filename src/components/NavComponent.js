import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Toast from '@/utils/toast-helper'

const NavComponent = () => {
	const router = useRouter()
	const handleLogout = () => {
		localStorage.removeItem('authToken')
		Toast.fire({
			icon: 'success',
			title: 'Logout successfully. See U :)',
		})
		router.push('/users/login')
	}

	return (
		<div className="container">
			<nav className="navbar fixed-top" style={{ backgroundColor: '#e3f2fd' }}>
				<div className="container-fluid">
					<Link className="navbar-brand" href="/">
						Finance Tracker
					</Link>
					<button
						onClick={handleLogout}
						className="btn btn-light"
						role="button"
					>
						Logout
					</button>
				</div>
			</nav>
		</div>
	)
}

export default NavComponent
