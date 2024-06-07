import React, { FC } from 'react'
import { useAuth } from '../hooks/useAuth'

interface Props {
    children: JSX.Element
}

export const ProtectedRouter: FC<Props> = ({ children }) => {
    const isAuth = useAuth()
    return (
        <>
            {
                isAuth ? children
                    :
                    (
                        <div className='flex flex-col justify-center items-center gap-10 h-screen'>
                            <h1 className='text-2xl'>To View Page must be Login</h1>
                            <img className='w-2/3' src='https://as2.ftcdn.net/v2/jpg/05/76/13/35/1000_F_576133510_mWJwY0lvcDzcxcjTvTcg7ikBBPwgMTh9.jpg' alt='image protect'>

                            </img>
                        </div>
                    )
            }
        </>
    )
}
