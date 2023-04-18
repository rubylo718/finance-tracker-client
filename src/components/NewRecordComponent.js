import { useState } from 'react'
import { useRouter } from 'next/router'
import RecordService from '@/services/record.service'
import Toast from '@/utils/toast-helper'

const NewRecordComponent = () => {
	const router = useRouter()
	const [name, setName] = useState('')
	const categoryId = 3
	const [amount, setAmount] = useState(0)

	const handleName = (e) => {
		setName(e.target.value)
	}
	const handleAmount = (e) => {
		setAmount(e.target.value)
	}

	const handleAddRecord = async (e) => {
		e.preventDefault()
		try {
			const { status, message } = await RecordService.addRecord({
				name,
				categoryId,
				amount,
			})
			if (status === 'success') {
				Toast.fire({
					icon: 'success',
					title: message,
				})
				router.push('/records')
			} else {
				Toast.fire({
					icon: 'error',
					title: message,
				})
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="row justify-content-md-center">
			<div style={{ padding: '5rem' }} className="col-md-10">
				<h5>請輸入你的紀錄</h5>
				<form onSubmit={handleAddRecord}>
					<div>
						<label htmlFor="name" className="form-label">
							名稱
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
						<label htmlFor="categoryId" className="form-label">
							類別
						</label>
						<input
							type="text"
							className="form-control"
							id="categoryId"
							placeholder="不分類"
							disabled
						/>
					</div>
					<br />
					<div>
						<label htmlFor="amount" className="form-label">
							金額
						</label>
						<input
							onChange={handleAmount}
							type="number"
							className="form-control"
							id="amount"
							required
						/>
					</div>
					<br />
					<button type="submit" className="btn btn-warning">
						新增
					</button>
					<button
					className="btn btn-info mx-2"
					type="button"
					onClick={() => {
						router.back()
					}}
				>
					Back
				</button>
				</form>
			</div>
		</div>
	)
}

export default NewRecordComponent
