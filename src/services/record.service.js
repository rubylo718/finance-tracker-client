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
      // console.log('data', {data})
			return data
		} catch (err) {
			console.log(err)
		}
	},
}

export default RecordService
