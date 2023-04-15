import axios from 'axios'

const API_URL = 'http://localhost:8080/users'

const AuthService = {
	register: async ({ name, email, password, checkPassword }) => {
		try {
			const response = await axios.post(API_URL + '/register', {
				name,
				email,
				password,
				checkPassword,
			})
		} catch (err) {
			console.log(err)
		}
	},
}

export default AuthService
