import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import RecordService from '@/services/record.service'

const RecordComponent = () => {
	const [recordData, setRecordData] = useState([])
	useEffect(() => {
		const getRecords = async () => {
			const records = await RecordService.getAllRecords()
			if (records) {
				setRecordData(records.allRecords)
			}
		}

		getRecords()
	}, [])
	let totalAmount = 0
	return (
		<div style={{ padding: '5rem' }}>
			<p className='mb-0' style={{ fontSize: '24px' }}>
				總金額：
			</p>
			<p
				className="d-flex justify-content-end"
				style={{ color: '#ff6600', fontWeight: '400', fontSize: '48px' }}
			>
				{recordData.forEach((d) => (totalAmount += d.amount))}
        {totalAmount}
			</p>
			<ul className="list-group">
				{recordData?.map((d) => {
					return (
						<li key={d._id} className="list-group-item">
							<div className="row d-flex flex-nowrap align-items-center">
								<div className="col-2 d-flex justify-content-center"></div>
								<div className="col-4">
									<h5>{d.name}</h5>
									<small>date</small>
								</div>
								<div className="col-4">
									<h5> {d.amount} </h5>
								</div>
								<form>
									<button type="submit" className="btn btn-outline-danger">
										Delete
									</button>
								</form>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default RecordComponent
