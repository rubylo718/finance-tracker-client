import { apiHelper } from '../config/axios-helper'

const RecordService = {
	getAllRecords: async () => {
		try {
			const authToken = localStorage.getItem('authToken')
			const { data } = await apiHelper.get('/records/', {
				headers: {
					Authorization: 'Bearer ' + authToken,
				},
			})
			return data
		} catch (err) {
			console.log(err)
		}
	},
	addRecord: async ({ name, categoryId, amount }) => {
		try {
			const authToken = localStorage.getItem('authToken')
			const { data } = await apiHelper.post(
				'/records/new',
				{ name, categoryId, amount },
				{ headers: { Authorization: 'Bearer ' + authToken } }
			)
			return data
		} catch (err) {
			console.log(err)
		}
	},
}

export default RecordService
