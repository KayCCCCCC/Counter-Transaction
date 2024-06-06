import React, { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/user/userSlice'
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper'
import { toast } from 'react-toastify'
const Header: FC = () => {
    const isAuth = useAuth();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(logout())
        removeTokenFromLocalStorage('token');
        toast.success("You logout successfully!")
        navigate('/')
    }
    return (
        <header className='flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm'>
            <Link to="/">
                <FaBtc size={20} />
            </Link>

            {
                isAuth && (
                    <ul className='flex items-center gap-5 ml-auto mr-10'>
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/categories'} className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}>Category</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/transactions'} className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}>Transaction</NavLink>
                        </li>
                    </ul>
                )
            }

            {
                isAuth ? (
                    <button className='btn btn-red' onClick={() => logoutHandler()}>
                        <span>Log Out</span>
                        <FaSignOutAlt />
                    </button>
                ) : (
                    <Link to={'auth'} className='py-2 text-white hover:text-white/50 ml-auto btn btn-green'>
                        <span>LogIn / SignIn</span>
                    </Link>
                )
            }
        </header>
    )
}

export default Header