import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import CourseBox from '../../Components/CourseBox/CourseBox'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import TitlePage from '../../Components/TitlePage/TitlePage'
import './Category.css'

export default function Category() {
    return (
        <>

            <TitlePage titlePage='دسته بندی ها' />

            <Topbar />
            <Navbar />

            <section className='courses'>
                <div className="container">

                    <div className="courses-top-bar d-flex justify-content-between align-items-center p-4">
                        <div className="courses-top-bar__right d-flex align-items-center">
                            <div className="courses-top-bar__selection position-relative">
                                <span className="courses-top-bar__selection-title d-flex align-items-center p-3 rounded-1 text-secondary">
                                مرتب سازی پیش فرض
                                    <IoIosArrowDown className='courses-top-bar__selection-icon ms-2' />
                                </span>
                                <ul className="courses-top-bar__selection-list bg-white w-100 position-absolute py-3 px-0">
                                    <li className='courses-top-bar__selection-item courses-top-bar__selection-item--active'>
                                        مرتب سازی پیش فرض
                                    </li>
                                    <li className='courses-top-bar__selection-item'>
                                        مرتب سازی دوره های جدید
                                    </li>
                                    <li className='courses-top-bar__selection-item'>
                                        مرتب سازی دوره های رایگان
                                    </li>
                                    <li className='courses-top-bar__selection-item'>
                                        مرتب سازی دوره های پولی
                                    </li>
                                    <li className='courses-top-bar__selection-item'>
                                        مرتب سازی بر اساس ارزان ترین
                                    </li>
                                    <li className='courses-top-bar__selection-item'>
                                        مرتب سازی بر اساس گران ترین
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="courses-top-bar__left d-flex">
                            <form action="#" className="courses-top-bar__form position-relative rounded-1" onSubmit={event => event.preventDefault()}>
                                <input
                                    type="text"
                                    className="courses-top-bar__input w-100"
                                    placeholder="جستجوی دوره ..."
                                />
                                <AiOutlineSearch className='courses-top-bar__search-icon position-absolute text-secondary' />
                            </form>
                        </div>
                    </div>

                    <div className="courses-content mt-4">
                        <div className="container">
                            <div className="row">
                            <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                            teacherName="هادی حیدری آذر"
                            price={750000}
                            cover='/images/courses/tailwindcss.jpg'
                            off={0}
                            url='tailwindcss'
                        />
                        <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                            teacherName="هادی حیدری آذر"
                            price={750000}
                            cover='/images/courses/tailwindcss.jpg'
                            off={0}
                            url='tailwindcss'
                        />
                        <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                            teacherName="هادی حیدری آذر"
                            price={750000}
                            cover='/images/courses/tailwindcss.jpg'
                            off={0}
                            url='tailwindcss'
                        />
                        <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                            teacherName="هادی حیدری آذر"
                            price={750000}
                            cover='/images/courses/tailwindcss.jpg'
                            off={0}
                            url='tailwindcss'
                        />
                        <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                            teacherName="هادی حیدری آذر"
                            price={750000}
                            cover='/images/courses/tailwindcss.jpg'
                            off={0}
                            url='tailwindcss'
                        />
                        <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                            teacherName="هادی حیدری آذر"
                            price={750000}
                            cover='/images/courses/tailwindcss.jpg'
                            off={0}
                            url='tailwindcss'
                        />
                        <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                            teacherName="هادی حیدری آذر"
                            price={750000}
                            cover='/images/courses/tailwindcss.jpg'
                            off={0}
                            url='tailwindcss'
                        />
                        <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                            teacherName="هادی حیدری آذر"
                            price={750000}
                            cover='/images/courses/tailwindcss.jpg'
                            off={0}
                            url='tailwindcss'
                        />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}
