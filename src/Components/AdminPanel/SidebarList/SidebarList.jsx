import React, { useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { PiVideoFill } from 'react-icons/pi'
import { MdVideoLibrary, MdDiscount } from 'react-icons/md'
import { HiMenuAlt2, HiUsers } from 'react-icons/hi'
import { BsFillFileEarmarkRichtextFill } from 'react-icons/bs'
import { BiSolidCategoryAlt, BiSolidMessageDetail } from 'react-icons/bi'
import { ImExit } from 'react-icons/im'
import swal from 'sweetalert'
import { FaComments } from 'react-icons/fa'

export default function SidebarList({ setShow }) {

    const homePage = useRef()
    
    const navigate = useNavigate()

    const logoutAdmin = (event) => {
        event.preventDefault()

        swal({
            text: 'شما با موفقیت از حساب کاربری خود خارج شدید',
            icon: 'success',
            buttons: 'متوجه شدم !'
        }).then(() => {
            navigate('/')
        })
    }

    const isActiveMenu = (event) => {
        if (setShow) {
            setShow(false)
        }

        if (event.target.textContent === 'صفحه اصلی') {
            homePage.current.classList.add('active-menu')
            homePage.current.classList.remove('nav-item')
        } else {
            homePage.current.classList.remove('active-menu')
            homePage.current.classList.add('nav-item')
        }
    }

    useEffect(() => {
        if (location.pathname === '/panel-admin' || location.pathname === '/panel-admin/') {
            homePage.current.classList.add('active-menu')
            homePage.current.classList.remove('nav-item')
        } else {
            homePage.current.classList.remove('active-menu')
            homePage.current.classList.add('nav-item')
        }
    }, [])

    return (
        <div className="sidebar-menu mt-3">
            <ul className='p-0' style={{overflowY: 'auto'}}>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="/panel-admin" ref={homePage}>
                        <AiFillHome className='me-2' />
                        صفحه اصلی
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="courses">
                        <MdVideoLibrary className="me-2" />
                        دوره ها
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="sessions">
                        <PiVideoFill className="me-2" />
                        جلسات
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="menus">
                        <HiMenuAlt2 className='me-2' />
                        منو ها
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="articles">
                        <BsFillFileEarmarkRichtextFill className="me-2" />
                        مقاله ها
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="users">
                        <HiUsers className='me-2' />
                        کاربران
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="comments">
                        <FaComments className='me-2' />
                        دیدگاه ها و پاسخ ها
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="discount-codes">
                        <MdDiscount className="me-2" />
                        کدهای تخفیف
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="categories">
                        <BiSolidCategoryAlt className='me-2' />
                        دسته بندی ها
                    </NavLink>
                </li>
                <li onClick={event => isActiveMenu(event)}>
                    <NavLink className={(link) => link.isActive ? "active-menu d-block p-4" : 'nav-item d-block p-4'} to="contact-us-tickets">
                        <BiSolidMessageDetail className='me-2' />
                        پیغام ها و تیکت ها
                    </NavLink>
                </li>
                <li>
                    <button type="button" className='nav-item d-block p-4 logout-btn w-100 text-start' onClick={(event) => logoutAdmin(event)}>
                        <ImExit className='me-2' />
                        <span> خروج </span>
                    </button>
                </li>
            </ul>
        </div>
    )
}