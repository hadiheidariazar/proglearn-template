import React from 'react'
import "./SectionHeader.css"
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function SectionHeader({ title, desc, btnTitle, btnUrl }) {
    return (
        <div className="courses-header d-flex align-items-center justify-content-between ms-4">
            <div className="courses-header__right d-flex">
                <span className="courses-header__title title fs-3 text-dark-color"> {title} </span>
                <span className="courses-header__text fs-5"> {desc} </span>
            </div>

            {
                btnTitle ? (
                    <div className="courses-header__left ms-4">
                        <a href={`/${btnUrl}`} className="courses-header__link fs-4 d-flex align-items-center text-center text-white bg-main-color p-3 rounded-3">
                            {btnTitle}
                            <AiOutlineArrowLeft className='courses-header__icon ms-2 fs-4' />
                        </a>
                    </div>
                ) : null
            }
        </div>
    )
}
