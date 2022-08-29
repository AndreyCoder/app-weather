import React from 'react'
import Logo from '../../media/Logo.png'
import { Link, Outlet } from 'react-router-dom'

import SearchBar from '../searchBar/SearchBar.jsx'
import s from './Nav.module.css'

const Nav = ({ onSearch }) => {
  return (
    <main>
      <div className={s.container}>
        <nav className={s.nav}>

          <Link to='/'>
            <img className={s.logo} src={Logo} alt='logo' />
          </Link>

          <Link
            className={s.active}
            to='/about'>
            About
          </Link>

          <SearchBar onSearch={onSearch} />

        </nav>
      </div>

      <Outlet />
    </main>
  )
}

export default Nav

