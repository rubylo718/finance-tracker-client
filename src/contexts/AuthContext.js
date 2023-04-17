import { createContext, useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthService from '@/services/auth.service'

const defaultAuthContext = {
	isAuthenticated: false,
	currentUser: null,
	login: null,
	logout: null,
}

const AuthContext = createContext(defaultAuthContext)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [currentUser, setCurrentUser] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const checkTokenIsValid = async () => {
			const authToken = localStorage.getItem('authToken')
			if (!authToken) {
				setIsAuthenticated(false)
				setCurrentUser(null)
			} else {
				const user = await AuthService.getCurrentUser(authToken)
				if (user) {
					setIsAuthenticated(true)
					setCurrentUser(user)
				} else {
					setIsAuthenticated(false)
					setCurrentUser(null)
				}
			}
		}

		checkTokenIsValid()
	}, [router])

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				currentUser,
				login: async ({ email, password }) => {
					const { status, message, token } = await AuthService.login({
						email,
						password,
					})
					if (token) {
						setIsAuthenticated(true)
						localStorage.setItem('authToken', token)
					} else {
						setIsAuthenticated(false)
					}
					return { status, message }
				},
				logout: () => {
					localStorage.removeItem('authToken')
					setIsAuthenticated(false)
					setCurrentUser(null)
				},
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
