import React, { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader } from '../types/types'
import CategoryModal from './CategoryModal'

const TransactionForm: FC = () => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const { categories } = useLoaderData() as IResponseTransactionLoader
    return (
        <>
            <div className='rounded-md bg-slate-800 p-4'>
                <Form className='grid gap-2'
                    method='post'
                    action='/transactions'
                >
                    <label className='grid mt-1' htmlFor='title'>
                        <span>Title</span>
                        <input className='input border border-slate-700' type="text" placeholder='Title ...' name='title' required />
                    </label>
                    <label className='grid mt-1' htmlFor='amount'>
                        <span>Amount</span>
                        <input className='input border border-slate-700' type="number" placeholder='Amount ...' name='amount' required />
                    </label>

                    {/* Select */}
                    {
                        categories.length ? (
                            <label htmlFor='category mt-1' className='grid'>
                                <span>Category</span>
                                <select className='input border border-slate-700' name='category' required>
                                    {categories.map((category, idx) => (
                                        <option key={idx} className='bg-slate-800 text-white' value={category.id}>{category.title}</option>
                                    ))}
                                </select>
                            </label>
                        ) : <h1 className='mt-1 text-red-500'>To continue create categories</h1>
                    }

                    {/* Add Categories */}
                    <a
                        onClick={() => setVisibleModal(!visibleModal)}
                        className='flex mt-2 max-w-fit items-center gap-2 text-white/50 hover:text-white cursor-pointer'>
                        <FaPlus />
                        <span>Manage Categories</span>
                    </a>

                    {/* Radio Button */}
                    <div className='flex gap-4 items-center'>
                        <label className='flex cursor-pointer items-center gap-2'>
                            <input type='radio' name='type' value={'income'} className='text-blue-600' />
                            <span>Income</span>
                        </label>
                        <label className='flex cursor-pointer items-center gap-2'>
                            <input type='radio' name='type' value={'expense'} className='text-blue-600' />
                            <span>Expense</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type='submit' className='btn btn-green max-w-fit'>
                        Submit
                    </button>
                </Form>
            </div>
            {/* Add category modal */}
            {visibleModal && (<CategoryModal type='post' setVisibleModal={setVisibleModal} />)}

        </>
    )
}

export default TransactionForm
