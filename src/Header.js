import React from 'react'
import './Banner1.css'
import Navbar from './Navbar'
import Logo from './Logo'
import UserProfile from './UserProfile'

function Header() {
    return (
        <div>
            <header className="Header">
				<Logo />
				<Navbar />
				<UserProfile />
			</header>
        </div>
    )
}

export default Header
