import React from 'react'
import { BiHome } from 'react-icons/bi'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import "./BreadCrumb.css"

export default function BreadCrumb({ links }) {
    return (
        <section className="breadcrumb my-4">
            <div className="container">
                <div className="breadcrumb__content d-flex bg-secondary-500 px-2 py-3 p-sm-4  align-items-center rounded-3">
                    <div className="breadcrumb__home-content-icon p-3 d-flex align-items-center justify-content-center bg-white rounded-4">
                        <BiHome className='breadcrumb__home-icon text-secondary' />
                    </div>
                    <ul className='d-md-flex breadcrumb__list align-items-center justify-content-start text-center m-0 px-0 ps-0 px-md-2 ps-md-3'>

                        {
                            links.map(link => (
                                <li className='breadcrumb__item text-center' key={link.id}>
                                    <a href={`/${link.url}`} className='breadcrumb__link text-secondary'>
                                        {link.title}
                                    </a>
                                    {link.id !== links.length ? <MdKeyboardArrowLeft className='breadcrumb__icon mx-1 mx-sm-2 fs-4 text-secondary' /> : null}
                                </li>
                            ))

                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
