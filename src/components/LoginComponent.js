import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthService from '../services/auth.service'
import Toast from '../utils/toast-helper'

const LoginComponent = () => {
	const router = useRouter()
	let [email, setEmail] = useState('')
	let [password, setPassword] = useState('')

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			const { status, message, token } = await AuthService.login({
				email,
				password,
			})
			if (status === 'success') {
				Toast.fire({
					icon: 'success',
					title: message,
				})
				localStorage.setItem('authToken', token)
				router.push('/')
			} else {
				Toast.fire({
					icon: 'error',
					title: message,
				})
			}
			return
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div className="row justify-content-md-center">
			<div style={{ padding: '5rem' }} className="col-md-10">
				<form onSubmit={handleLogin}>
					<div>
						<label htmlFor="email" className="form-label">
							電子信箱
						</label>
						<input
							onChange={handleEmail}
							type="email"
							className="form-control"
							id="email"
							required
						/>
					</div>
					<br />
					<div>
						<label htmlFor="password" className="form-label">
							密碼
						</label>
						<input
							onChange={handlePassword}
							type="password"
							className="form-control"
							id="password"
							required
						/>
					</div>
					<br />
					<div>
						<button type="submit" className="btn btn-primary">
							登入
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginComponent
