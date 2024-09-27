import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { BsList } from 'react-icons/bs'
import SidebarList from '../SidebarList/SidebarList';
import "./../Sidebar/Sidebar.css";

export default function OffcanvasMenu() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <BsList className='text-main-color me-3 me-sm-4 ms-0 ms-sm-3 btn-toggle-offcanvas d-block d-lg-none' onClick={handleShow} />
            <Offcanvas show={show} onHide={handleClose} id="sidebar" className="d-block d-lg-none offcanvas-sidebar">
                <Offcanvas.Header className='sidebar-header-bottom'>
                    <Offcanvas.Title className="sidebar-header p-0 sidebar-header-not-bottom">
                        <div className="sidebar-logo p-4">
                            <a href="/" className='d-block'>
                                <img src="/images/logo/Logo.png" alt="Logo" />
                            </a>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <SidebarList setShow={setShow} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
