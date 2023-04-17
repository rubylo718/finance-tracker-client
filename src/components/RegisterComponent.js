import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AuthService from '../services/auth.service'
import Toast from '../utils/toast-helper'
import { useAuth } from '@/contexts/AuthContext'

const RegisterComponent = () => {
	const router = useRouter()
	let [name, setName] = useState('')
	let [email, setEmail] = useState('')
	let [password, setPassword] = useState('')
	let [checkPassword, setCheckPassword] = useState('')

	const { isAuthenticated } = useAuth()
	useEffect(()=>{
		if(isAuthenticated) {
			router.push('/')
		}
	},[router, isAuthenticated])

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleCheckPassword = (e) => {
		setCheckPassword(e.target.value)
	}

	const handleRegister = async (e) => {
		e.preventDefault()
		try {
			const { status, message } = await AuthService.register({
				name,
				email,
				password,
				checkPassword,
			})
			if (status === 'success') {
				Toast.fire({
					icon: 'success',
					title: message,
				})
				router.push('/users/login')
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
				<form onSubmit={handleRegister}>
					<div>
						<label htmlFor="name" className="form-label">
							用戶名稱
						</label>
						<input
							onChange={handleName}
							type="text"
							className="form-control"
							id="name"
							required
						/>
					</div>
					<br />
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
							placeholder="長度至少超過 8 個英文或數字"
							minLength="8"
							required
						/>
					</div>
					<br />
					<div>
						<label htmlFor="checkPassword" className="form-label">
							確認密碼
						</label>
						<input
							onChange={handleCheckPassword}
							type="password"
							className="form-control"
							id="checkPassword"
							placeholder="請再輸入一次您的密碼"
							minLength="8"
							required
						/>
					</div>
					<br />
					<button type="submit" className="btn btn-primary">
						註冊
					</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterComponent
