import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout: FC = () => {
    return (
        <React.Fragment>
            <div className='min-h-screen bg-slate-900 pb=20 font-roboto text-white'>
                <Header />
                <div className='container'>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout