import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
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
            <li>
                <NavLink to = {'/login'}>Login</NavLink>
            </li>
            <li>
                <NavLink to = {'/register'}>Register</NavLink>
            </li>
        </ul>
        
    </div>
  )
}

export default Navbar