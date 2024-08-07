import { FC } from 'react'
import TransactionForm from '../components/TransactionForm'
import { instance } from '../api/axios.api'
import { ICategory, IResponseTransactionLoader, ITransaction } from '../types/types'
import { toast } from 'react-toastify'
import TransactionTable from '../components/TransactionTable'
import { useLoaderData } from 'react-router-dom'
import { formatToUSD } from '../helpers/currency.helper'
import Chart from './../components/Chart';

export const transactionLoader = async () => {
    const categories = await instance.get<ICategory[]>('category/findAll')
    const transactions = await instance.get<ITransaction>('transaction/findAll')
    const totalIncome = await instance.get<number>('transaction/income/find')
    const totalExpense = await instance.get<number>('transaction/expense/find')

    console.log('totalIncome: ', totalIncome)
    console.log('totalExpense: ', totalExpense)

    const data = {
        categories: categories.data,
        transactions: transactions.data,
        totalIncome: totalIncome.data,
        totalExpense: totalExpense.data
    }
    return data
}

export const transactionAction = async ({ request }: any) => {
    switch (request.method) {
        case "POST": {
            const formData = await request.formData()

            const newTransaction = {
                title: formData.get('title'),
                amount: +formData.get('amount'),
                category: {
                    id: formData.get('category')
                },
                type: formData.get('type')
            }
            await instance.post('transaction/create', newTransaction)
            toast.success("Transaction Add.")
            return null
        }
        case "PATCH": {
            const formData = await request.formData()
            const category = {
                id: formData.get('id'),
                title: formData.get('title')
            }
            await instance.patch(`category/category/${category.id}`, category)
            return null
        }
        case "DELETE": {
            const formData = await request.formData()
            const transactionId = formData.get('id')
            await instance.delete(`transaction/transaction/${transactionId}`)
            toast.success("Transaction Delete.")
            return null
        }
    }
}

const Transactions: FC = () => {
    const { totalIncome, totalExpense } = useLoaderData() as IResponseTransactionLoader
    return (
        <>
            <div className='grid grid-cols-3 gap-4 mt-4 items-start'>
                {/* Add Transaction Form */}
                <div className='col-span-2 grid'>
                    <TransactionForm />
                </div>
                <div className='rounded-md bg-slate-800 p-3'>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <p className='text-md text-center font-bold uppercase'>
                                Total Income:
                            </p>
                            <p className='mt-2 rounded-md bg-green-600 p-1 text-center'>
                                {formatToUSD(totalIncome)}
                            </p>
                        </div>
                        <div>
                            <p className='text-md text-center font-bold uppercase'>
                                Total Expense:
                            </p>
                            <p className='mt-2 rounded-md bg-red-500 p-1 text-center'>
                                {formatToUSD(totalExpense)}
                            </p>
                        </div>
                    </div>
                    <div>
                        {<Chart totalIncome={totalIncome} totalExpense={totalExpense} />}
                    </div>
                </div>
            </div>
            {/* Transaction Table */}
            <div className='my-5'>
                <TransactionTable limit={5} />
            </div>
        </>
    )
}

export default Transactions