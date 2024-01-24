import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useContext } from 'react'
import { useAuthValue } from '../context/AuthContext' 
import { useAuthentication } from '../hooks/useAuthentication'

const Navbar = () => {
    const [user]   = useAuthValue();
    const {logout} = useAuthentication()

  return (
    <div className={styles.navbarContainer}>
        <NavLink to = {'/'} className={styles.navbarHeader}>Blog dos <span>tinhosos</span></NavLink>
        <ul>
            <li>
                <NavLink to = {'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to = {'/about'}>About us</NavLink>
            </li>
            {!user &&
                <>
                    <li>
                        <NavLink to = {'/login'}>Login</NavLink>
                    </li>
                    <li>
                       <NavLink to = {'/register'}>Register</NavLink>
                    </li>
                </>
            }
            {user &&
                <>
                    <li>
                        <NavLink to = {'/post/createpost'}>Post</NavLink>
                    </li>
                    <li>
                        <NavLink to = {'/dashboard'}>My posts</NavLink>
                    </li>
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                </>
            }
        </ul>
    </div>
  )
}

export default Navbar