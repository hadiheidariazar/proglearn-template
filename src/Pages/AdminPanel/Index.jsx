import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/AdminPanel/Sidebar/Sidebar'
import Topbar from '../../Components/AdminPanel/Topbar/Topbar'
import "./Index.css"

export default function Index() {
    return (
        <div id='content'>
            <Sidebar />

            <div id='home' className='col-12 col-lg-10'>
                <Topbar />

                <div className="container-fluid mb-5" id='home-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
