import React from 'react'
import Sidebar from '../../Components/UserPanel/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import OffcanvasMenu from '../../Components/UserPanel/OffcanvasMenu/OffcanvasMenu'
import { AiFillHome } from 'react-icons/ai'
import "./Index.css"

export default function Index() {
    return (
        <>
            <div className="container-fluid bg-white">
                <div className="content">
                    <div className="row">
                        <div className="col-0 col-lg-3 d-none d-lg-grid bg-white ps-5">
                            <div className="sidebar bg-white">
                                <div className="sidebar-header-img mt-5">
                                    <a href="/">
                                        <img src="/images/logo/Logo.png" alt="ProgLearn Logo" className='img-fluid' />
                                    </a>
                                </div>
                                <Sidebar />
                            </div>
                        </div>
                        <div className="col-12 col-lg-9 sidebar-left">
                            <div className="content-sidebar bg-secondary-500 p-4 p-md-5">
                                <div className="topbar">
                                    <div className="row mb-5">
                                        <div className="col-12 d-flex justify-content-between align-items-center">
                                            <div className="side-right d-flex align-items-center">
                                                <OffcanvasMenu />
                                                <h3 className='fw-bold d-none d-lg-flex align-items-center'>
                                                    <span className='username d-inline-block me-1 px-1'>
                                                        هادی حیدری آذر
                                                    </span>
                                                    عزیز، خوش اومدی🖐
                                                </h3>
                                            </div>
                                            <div className="side-left d-flex">
                                                <a href="/" className='btn me-3 rounded-pill bg-main-color p-3 btn-home-page'>
                                                    <AiFillHome className='text-white btn-home-page-icon' />
                                                </a>
                                                <img src='/images/profiles/default-profile.jpg' alt="My Profile" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='fw-bold d-block align-items-center d-lg-none'>
                                        <span className='username d-inline-block me-1 ps-2 ps-sm-4'>
                                            هادی حیدری آذر
                                        </span>
                                        عزیز، خوش اومدی🖐
                                    </h3>
                                </div>
                                <div className="sidebar-container mt-5">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}