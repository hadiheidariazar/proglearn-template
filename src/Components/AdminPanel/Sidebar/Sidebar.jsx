import React from 'react'
import SidebarList from '../SidebarList/SidebarList'
import "./Sidebar.css"

export default function Sidebar() {

    return (
        <div id="sidebar" className="col-2 col-lg-0 fixed-right d-none d-lg-block">
            <div className="sidebar-header">
                <div className="sidebar-logo p-4">
                    <a href="/">
                        <img src="/images/logo/Logo.png" alt="Logo" />
                    </a>
                </div>
            </div>
            <SidebarList />

        </div>
    )
}
