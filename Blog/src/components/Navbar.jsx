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
        <NavLink to = {'/'} className={styles.navbarHeader}>Mini <span className={styles.spanNavbar}>blog</span></NavLink>
        <ul>
            <li>
                <NavLink to = {'/'} className={({isActive}) => (isActive ? 'Ativo' : 'NaoAtivo')}>Home</NavLink>
            </li>
            <li>
                <NavLink to = {'/about'} className={({isActive}) => (isActive ? 'Ativo' : 'NaoAtivo')}>About us</NavLink>
            </li>
            {!user &&
                <>
                    <li>
                        <NavLink to = {'/login'} className={({isActive}) => (isActive ? 'Ativo' : 'NaoAtivo')}>Login</NavLink>
                    </li>
                    <li>
                       <NavLink to = {'/register'} className={({isActive}) => (isActive ? 'Ativo' : 'NaoAtivo')}>Register</NavLink>
                    </li>
                </>
            }
            {user &&
                <>
                    <li>
                        <NavLink to = {'/post/createpost'} className={({isActive}) => (isActive ? 'Ativo' : 'NaoAtivo')}>Post</NavLink>
                    </li>
                    <li>
                        <NavLink to = {'/dashboard'} className={({isActive}) => (isActive ? 'Ativo' : 'NaoAtivo')}>My posts</NavLink>
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