import { useState, useEffect } from 'react'
import Link from 'next/link'
import RecordService from '@/services/record.service'
import Toast from '@/utils/toast-helper'

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
	}, [recordData])

	const handleDeleteRecord = async (e) => {
		try {
			const { status } = await RecordService.deleteRecord(e.target.id)
			if (status === 'success') {
				Toast.fire({
					icon: 'success',
					title: 'Delete successfully.',
				})
				return
			} else {
				Toast.fire({
					icon: 'error',
					title: 'Delete failed.',
				})
				return
			}
		} catch (err) {
			console.log(err)
		}
	}

	let totalAmount = 0
	return (
		<div style={{ padding: '5rem' }}>
			<p className="mb-0" style={{ fontSize: '24px' }}>
				總金額：
			</p>
			<p
				className="d-flex justify-content-end"
				style={{ color: '#ff6600', fontWeight: '400', fontSize: '48px' }}
			>
				{recordData.forEach((d) => (totalAmount += d.amount))}
				{totalAmount}
			</p>
			<div>
				<ul className="list-group">
					{recordData?.map((d) => {
						return (
							<li key={d._id} className="list-group-item">
								<div className="row d-flex flex-wrap align-items-center">
									<div className="col-1 d-flex justify-content-center"></div>
									<div className="col-4">
										<h5>{d.name}</h5>
										<small>{d.date.slice(0, 10)}</small>
									</div>
									<div className="col-3">
										<h5 style={{ textAlign: 'right' }}> {d.amount} </h5>
									</div>
									<div className="col-auto">
										<div className="d-grid gap-2 d-md-flex justify-content-md-end">
											<button
												type="button"
												className="btn btn-outline-primary mx-2"
											>
												Edit
											</button>
											<button
												onClick={handleDeleteRecord}
												type="button"
												className="btn btn-outline-danger"
												id={d._id}
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="d-flex justify-content-center mt-4">
				<Link href="/records/newRecord">
					<button className="btn btn-warning" type="button">
						新增記錄
					</button>
				</Link>
			</div>
		</div>
	)
}

export default RecordComponent
