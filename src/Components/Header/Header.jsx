import React from 'react'
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'

export default function Header() {
    return (
        <header>
            <Topbar />
            <Navbar />
            <Landing />
        </header>
    )
}
