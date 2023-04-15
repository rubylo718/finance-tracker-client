import { apiHelper } from "../config/axios-helper"

const AuthService = {
	register: async ({ name, email, password, checkPassword }) => {
		try {
			const { data }= await apiHelper.post('/users/register', {
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
}

export default AuthService
