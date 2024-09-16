import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';
import Sidebar from '../Sidebar/Sidebar';

export default function OffcanvasMenu() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <BsList className='text-main-color me-3 me-sm-4 ms-0 ms-sm-3 btn-toggle-offcanvas d-flex d-lg-none' onClick={handleShow} />
            <Offcanvas show={show} onHide={handleClose} className="d-block d-lg-none offcanvas-sidebar-my-account sidebar bg-white p-3">
                <Offcanvas.Header className='sidebar-header-bottom'>
                    <Offcanvas.Title className="sidebar-header p-0 sidebar-header-not-bottom">
                        <div className="sidebar-header-img mt-2 mb-4">
                            <a href="/">
                                <img src="/images/logo/Logo.png" alt="ProgLearn Logo" className='img-fluid offcanvas-image' />
                            </a>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <Sidebar />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}