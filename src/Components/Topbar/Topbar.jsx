import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import './Topbar.css'

export default function Topbar() {
    return (
        <div className="topbar d-none d-lg-block fw-bold text-dark-color pt-4 pb-3">
            <div className="container-fluid">
                <div className="top-bar__content d-flex justify-content-between px-4">
                    <div className="top-bar__right d-flex">
                        <ul className="top-bar__menu d-flex">
                            <li className="top-bar__item">
                                <a href='/course/html' className="top-bar__link text-dark-color px-3 fs-5">
                                    آموزش HTML
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href='/course/css' className="top-bar__link text-dark-color px-3 fs-5">
                                    آموزش CSS
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href='/course/bootstrap' className="top-bar__link text-dark-color px-3 fs-5">
                                    آموزش بوت استرپ
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href='/course/tailwindcss' className="top-bar__link text-dark-color px-3 fs-5">
                                    آموزش تیلویند
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href='/course/javascript' className="top-bar__link text-dark-color px-3 fs-5">
                                    آموزش جاوا اسکریپت
                                </a>
                            </li>
                            <li className="top-bar__item">
                                <a href='/course/reactjs' className="top-bar__link text-dark-color px-3 fs-5">
                                    آموزش ری اکت
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar__left d-flex align-items-baseline">
                        <div className="top-bar__email d-flex align-items-center">
                            <a href="mailto:hadiha010101@gmail.com" className="top-bar__email-text px-1 top-bar__link text-dark-color fs-5">
                                hadiha010101@gmail.com
                            </a>
                            <MdEmail className="top-bar__email-icon text-main-color fs-2 mx-2" />
                        </div>
                        <div className="top-bar__phone d-flex align-items-center">
                            <a href="tel:09120000000" className="top-bar__phone-text px-1 top-bar__link text-dark-color fs-5">
                                09120000000
                            </a>
                            <BsFillTelephoneFill className="top-bar__phone-icon text-main-color fs-2 ms-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}