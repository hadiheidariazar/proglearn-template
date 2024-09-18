import React from 'react'
import OffcanvasMenu from '../OffcanvasMenu/OffcanvasMenu'
import "./Topbar.css"

export default function Topbar() {
    return (
        <div className="container-fluid">
            <div className="home-header mt-4 d-block">
                <div className="home-left">
                    <div className="home-profile">
                        <OffcanvasMenu />
                        <div className="home-profile-image me-3">
                            <a href="/my-account">
                                <img src="/images/profiles/default-profile.jpg" alt="My Profile" />
                            </a>
                        </div>
                        <div className="home-profile-name">
                            <a href="/my-account">
                                هادی حیدری آذر
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
