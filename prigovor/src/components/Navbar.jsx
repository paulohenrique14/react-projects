import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useAuthentication } from '../hooks/useAuthentication'

//redux for user control
import { useSelector } from 'react-redux'


const Navbar = () => {

    const user     = useSelector(state => state.user)
    const {logout} = useAuthentication()

    console.log(user) 

  return (
    <nav className='sticky top-0 left-0 w-full bg-primary text-white flex justify-between items-center px-10 py-5'>
        
        <NavLink to={'/'} className={styles.brand}>Mini <span>Blog</span></NavLink>
        <ul className='flex gap-7 list-none justify-end'>

            <li>
                <NavLink to={'/'} className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
            </li>

            <li>
                <NavLink to={'/about'}className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
            </li>

            {!user.isLogged &&
                <>
                    <li>
                        <NavLink to={'/signup'}className={({isActive}) => (isActive ? styles.active : '')}>Signup</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/login'}className={({isActive}) => (isActive ? styles.active : '')}>Login</NavLink>
                    </li>
                </>
            }
            {user.isLogged &&
                <>
                    <li>
                        <NavLink to={'/post/createpost'}className={({isActive}) => (isActive ? styles.active : '')}>Post</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/post/myposts'}className={({isActive}) => (isActive ? styles.active : '')}>Meus Posts</NavLink>
                    </li>
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                    
                </>
            }

        </ul>
    </nav>
  )
}

export default Navbar