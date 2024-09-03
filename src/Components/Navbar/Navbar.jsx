import React, { useState, useEffect } from 'react'
import { BsSearch, BsList, BsDatabaseLock } from 'react-icons/bs'
import { Button, Modal, Offcanvas } from 'react-bootstrap'
import { IoIosArrowDown, IoIosContacts } from 'react-icons/io'
import { BiHome } from 'react-icons/bi'
import { FiCodesandbox } from 'react-icons/fi'
import { MdSecurity } from 'react-icons/md'
import { TbBrandPython } from "react-icons/tb"
import { RiMicrosoftLine } from "react-icons/ri"
import './Navbar.css'

export default function Navbar() {

    const [NavbarIsShow, setNavbarIsShow] = useState(false);
    const [searchModalShow, setSearchModalShow] = useState(false);

    const handleClose = () => setNavbarIsShow(false);
    const handleShow = () => setNavbarIsShow(true);

    const handleCloseSearchModal = () => setSearchModalShow(false);
    const handleShowSearchModal = () => setSearchModalShow(true);

    useEffect(() => {
        window.addEventListener('resize', event => {
            if (event.currentTarget.innerWidth >= 992) {
                handleClose()
            }
        })
    })

    return (
        <>
            <div className="main-header">
                <div className="container-fluid">
                    <div className="main-header__content d-flex align-items-center justify-content-between py-4 px-3">

                        {/* Navbar in PC and Laptap Device */}
                        <div className="main-header__right d-none d-lg-flex">
                            <ul className="main-header__menu d-flex ps-1">
                                <li className="main-header__item">
                                    <a href="/" className="main-header__link">
                                        <img
                                            src="/images/logo/Logo.png"
                                            className="main-header__logo"
                                            alt="لوگوی پروگ لرن"
                                        />
                                    </a>
                                </li>

                                <li className="main-header__item">
                                    <a href="/category/frontend" className="main-header__link d-flex align-content-center justify-content-center position-relative">
                                        فرانت اند
                                        <IoIosArrowDown className='main-header__link-icon ms-1' />
                                    </a>
                                    <ul className="main-header__dropdown position-absolute bg-white py-3 px-4">
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/html' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش HTML
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/css' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش CSS
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/bootstrap' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش بوت استرپ
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/tailwindcss' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش تیلویند
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/javascript' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش جاوا اسکریپت
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/reactjs' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش ری اکت
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/vuejs' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش VueJs
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="main-header__item">
                                    <a href="/category/backend" className="main-header__link d-flex align-content-center justify-content-center position-relative">
                                        بک اند
                                        <IoIosArrowDown className='main-header__link-icon ms-1' />
                                    </a>
                                    <ul className="main-header__dropdown position-absolute bg-white py-3 px-4">
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/php' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش PHP
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/nodejs' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش Nodejs
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/python' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش پایتون
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/laravel' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش لاراول
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="main-header__item">
                                    <a href="/category/security" className="main-header__link d-flex align-content-center justify-content-center position-relative">
                                        امنیت
                                        <IoIosArrowDown className='main-header__link-icon ms-1' />
                                    </a>
                                    <ul className="main-header__dropdown position-absolute bg-white py-3 px-4">
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/pwk' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش کالی لینوکس
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/js-black' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش جاوا اسکریپت سیاه
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/python-black' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش پایتون سیاه
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="main-header__item">
                                    <a href="/category/python" className="main-header__link d-flex align-content-center justify-content-center position-relative">
                                        پایتون
                                        <IoIosArrowDown className='main-header__link-icon ms-1' />
                                    </a>
                                    <ul className="main-header__dropdown position-absolute bg-white py-3 px-4">
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/python' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش پایتون
                                            </a>
                                        </li>
                                        <li className="main-header__dropdown-item">
                                            <a href='/course/django' className="main-header__dropdown-link d-block py-3 text-dark-color">
                                                آموزش جنگو
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="main-header__item">
                                    <a href="/category/softskills" className="main-header__link d-flex align-content-center justify-content-center position-relative">
                                        مهارت های نرم
                                    </a>
                                </li>
                                <li className="main-header__item">
                                    <a href="/contact-us" className="main-header__link d-flex align-content-center justify-content-center position-relative">
                                        ارتباط با ما
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Navbar in Tablet and Phone Device */}
                        <Button variant="primary" onClick={handleShow} className="d-block d-lg-none text-main-color btn-toggle-sidebar ps-0">
                            <BsList />
                        </Button>

                        <Offcanvas show={NavbarIsShow} onHide={handleClose} className="d-block d-lg-none px-0 mx-0">
                            <Offcanvas.Header className='ps-3 pe-5' closeButton>
                                <Offcanvas.Title>
                                    <div className="offcanvas-header-image">
                                        <a href="/">
                                            <img src="/images/logo/Logo.png" alt="لوگوی پروگ لرن" className='main-header__logo d-bock d-lg-none' />
                                        </a>
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='px-1'>
                                <ul className='mt-5 p-0 w-100'>
                                    <li className="offcanvas-body-item">
                                        <a href="/" className="offcanvas-header-link py-4 px-2 my-2 d-block">
                                            <BiHome className='me-2' />
                                            صفحه اصلی
                                        </a>
                                    </li>
                                    <li className='offcanvas-body-item'>
                                        <a href="/category/frontend" className="offcanvas-header-link py-4 px-2 my-2 d-block">
                                            <FiCodesandbox className='me-2' />
                                            فرانت اند
                                        </a>
                                    </li>
                                    <li className='offcanvas-body-item'>
                                        <a href="/category/backend" className="offcanvas-header-link py-4 px-2 my-2 d-block">
                                            <BsDatabaseLock className='me-2' />
                                            بک اند
                                        </a>
                                    </li>
                                    <li className='offcanvas-body-item'>
                                        <a href="/category/security" className="offcanvas-header-link py-4 px-2 my-2 d-block">
                                            <MdSecurity className='me-2' />
                                            امنیت
                                        </a>
                                    </li>
                                    <li className='offcanvas-body-item'>
                                        <a href="/category/python" className="offcanvas-header-link py-4 px-2 my-2 d-block">
                                            <TbBrandPython className="me-2" />
                                            پایتون
                                        </a>
                                    </li>
                                    <li className='offcanvas-body-item'>
                                        <a href="/category/softskills" className="offcanvas-header-link py-4 px-2 my-2 d-block">
                                            <RiMicrosoftLine className="me-2" />
                                            مهارت نرم
                                        </a>
                                    </li>
                                    <li className='offcanvas-body-item'>
                                        <a href="/contact-us" className="offcanvas-header-link py-4 px-2 my-2 d-block">
                                            <IoIosContacts className='me-2' />
                                            ارتباط با ما
                                        </a>
                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>

                        <div className="header-image d-none d-sm-block d-lg-none">
                            <a href="/">
                                <img src="/images/logo/Logo.png" alt="لوگوی پروگ لرن" className='main-header__logo' />
                            </a>
                        </div>

                        <div className="main-header__left d-flex align-items-center">
                            <button type='button' className="main-header__search-btn d-flex align-items-center justify-content-center bg-main-color mx-3" onClick={handleShowSearchModal}>
                                <BsSearch className='main-header__search-icon text-white' />
                            </button>
                            <a href='/login' className="main-header__profile d-flex align-items-center px-3 text-main-color justify-content-center">
                                <span className="main-header__profile-text d-block text-center"> ورود / ثبت نام </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={searchModalShow} onHide={handleCloseSearchModal} centered>
                <Modal.Header closeButton className='py-4 px-4 px-sm-5'>
                    <Modal.Title> جستجوی شما </Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-5 px-3 px-sm-5'>
                    <div className="landing__searchbar position-relative mx-auto">
                        <input
                            type="text"
                            className="landing__searchbar-input w-100 rounded-4 bg-secondary-500"
                            placeholder="چی دوست داری یاد بگیری ..."
                        />
                        <button className="landing__searchbar-btn bg-main-color position-absolute">
                            <BsSearch className='landing__searchbar-icon text-white' />
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
