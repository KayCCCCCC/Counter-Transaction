import React, { FC, useState } from 'react'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'
import { setTokenForLocalStorage } from '../helpers/localstorage.helper'
import { useAppDispatch } from '../store/hooks'
import { login } from '../store/user/userSlice'
import { useNavigate } from 'react-router-dom'

const Auth: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.login({ email, password })
            if (data) {
                setTokenForLocalStorage('token', data.token)
                dispatch(login(data));
                toast.success("Login Successfully!")
                navigate('/')
            }
        } catch (error: any) {
            const err = error.response?.data.message
            toast.error(err.toString())
        }
    }

    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.registration({ email, password })
            if (data) {
                toast.success("Account has been created!")
                setIsLogin(!isLogin)
            }
        } catch (error: any) {
            const err = error.response?.data.message
            toast.error(err.toString())
        }
    }

    return (
        <div className='flex h-screen items-center justify-center bg-slate-900 text-white'>
            <div className='w-full max-w-md p-8 space-y-8 bg-slate-800 rounded-lg'>
                <div className='mb-10 text-center text-xl'>
                    {isLogin ? 'Login' : 'Registration'}
                </div>
                <form className='flex flex-col gap-5' onSubmit={isLogin ? loginHandler : registrationHandler}>
                    <input
                        type='text'
                        className='input p-2 rounded border border-gray-700 bg-gray-900 placeholder-gray-500 text-white'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        className='input p-2 rounded border border-gray-700 bg-gray-900 placeholder-gray-500 text-white'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='btn btn-green mx-auto px-4 py-2 rounded bg-green-600 hover:bg-green-700'>
                        Submit
                    </button>
                </form>

                <div className='mt-5 flex justify-center'>
                    {isLogin ? (
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className='text-slate-300 hover:text-white'>
                            You don't have an account !
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className='text-slate-300 hover:text-white'>
                            Already have an account !
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Auth