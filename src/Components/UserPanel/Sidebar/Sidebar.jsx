import React, { useEffect, useRef } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiSolidMessageAltDetail, BiSolidUser } from 'react-icons/bi'
import { MdVideoLibrary } from 'react-icons/md'
import { ImExit } from 'react-icons/im'
import { RiAdminFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {

    const homePage = useRef()
    const courses = useRef()
    const tickets = useRef()
    const detalis = useRef()

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

    useEffect(() => {
        if (location.pathname === '/my-account' || location.pathname === '/my-account/') {
            homePage.current.classList.add('active')
        } else if (location.pathname === '/my-account/courses') {
            homePage.current.classList.remove('active')
            courses.current.classList.add('active')
        } else if (location.pathname === '/my-account/tickets') {
            homePage.current.classList.remove('active')
            tickets.current.classList.add('active')
        } else if (location.pathname === '/my-account/details') {
            homePage.current.classList.remove('active')
            detalis.current.classList.add('active')
        }
    }, [])

    return (
        <ul className="sidebar-list p-0">
            <li className="sidebar-item mb-4">
                <a href="/my-account" className="p-3 rounded-3 sidebar-link d-block active" ref={homePage}>
                    <AiFillHome className='me-2 fs-2' />
                    پیشخوان
                </a>
            </li>
            <li className="sidebar-item my-4">
                <a href="/my-account/courses" className='p-3 rounded-3 sidebar-link d-block' ref={courses}>
                    <MdVideoLibrary className='me-2 fs-2' />
                    دوره های من
                </a>
            </li>
            <li className="sidebar-item my-4">
                <a href="/my-account/tickets" className='p-3 rounded-3 sidebar-link d-block' ref={tickets}>
                    <BiSolidMessageAltDetail className='me-2 fs-2' />
                    تیکت ها
                </a>
            </li>
            <li className="sidebar-item my-4">
                <a href="/my-account/details" className='p-3 rounded-3 sidebar-link d-block' ref={detalis}>
                    <BiSolidUser className='me-2 fs-2' />
                    جزئیات حساب من
                </a>
            </li>
            <li className="sidebar-item my-4">
                <a href="/panel-admin" className='p-3 rounded-3 sidebar-link d-block'>
                    <RiAdminFill className='me-2 fs-2' />
                    پنل مدیریت
                </a>
            </li>
            <li className="sidebar-item mt-4">
                <button type='button' className='p-3 rounded-3 btn-logout-account sidebar-link d-block w-100 text-start' onClick={(event) => logoutAdmin(event)}>
                    <ImExit className="me-3 fs-3" />
                    خروج
                </button>
            </li>
        </ul>
    )
}