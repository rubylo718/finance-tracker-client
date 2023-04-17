import { apiHelper } from '../config/axios-helper'

const AuthService = {
	register: async ({ name, email, password, checkPassword }) => {
		try {
			const { data } = await apiHelper.post('/users/register', {
				name,
				email,
				password,
				checkPassword,
			})
			return data
		} catch (err) {
			console.log(err)
		}
	},
	login: async ({ email, password }) => {
		try {
			const { data } = await apiHelper.post('/users/login', {
				email,
				password,
			})
			return data
		} catch (err) {
			console.log(err)
		}
	},
	getCurrentUser: async (authToken) => {
		try {
			const { data } = await apiHelper.get('/currentUser', {
				headers: {
					Authorization: 'Bearer ' + authToken,
				},
			})
			return data
		} catch (err) {
			console.log(err)
		}
	},
}

export default AuthService
