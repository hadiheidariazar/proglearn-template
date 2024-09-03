import React, { useState } from 'react'
import "./CourseBox.css"
import { FaChalkboardTeacher } from 'react-icons/fa'
import CircleSpinner from './../CircleSpinner/CircleSpinner'

export default function CourseBox({ title, teacherName, price, cover, off, url, isSlider }) {

    const [isShowImage, setIsShowImage] = useState(false)

    const courseImageLoaded = () => setIsShowImage(true)

    return (
        <div className={`col-6 col-sm-4 col-lg-3 mt-5 ${isSlider ? "w-100" : null}`}>
            <div className="course-box bg-white rounded-4 pb-3">
                <a href={`/course/${url}`}>

                    <img src={cover}
                        alt={title}
                        className="course-box__img img-fluid w-100"
                        onLoad={courseImageLoaded}
                    />

                    {
                        !isShowImage && <CircleSpinner />
                    }
                </a>
                <div className="course-box__main px-3">
                    <div className="course-box-title-section mt-3 mb-1">
                        <a href={`/course/${url}`} className="course-box__title d-block">
                            {title}
                        </a>
                    </div>

                    <div className="course-box__rating-teacher d-flex align-items-center justify-content-between">
                        <div className="course-box__teacher d-flex align-items-center">
                            <FaChalkboardTeacher className='course-box__teacher-icon me-1 me-md-2 text-secondary' />
                            <span className="course-box__teacher-link text-secondary">
                                {teacherName}
                            </span>
                        </div>
                    </div>

                    <div className="row d-flex align-items-center course-price mt-2">
                        <div className="col-12 col-md-6 text-start discount-container align-items-center">
                            {(off > 0 && off < 100) ? (
                                <p className="course-box__discount text-secondary text-danger text-decoration-line-through ">
                                    {price.toLocaleString("fa-IR")}
                                </p>
                            ) : null}
                        </div>
                        <div className="col-12 col-md-6 mt-2 mt-md-0 price-container text-end align-items-center">
                            <p className={`course-box__price text-secondary fw-bold ${price === 0 ? "text-success" : ""}`}>
                                {
                                    price === 0 ? "رایگان" : (
                                        <>
                                            {[price - (price * off) / 100].toLocaleString('fa-IR')}
                                            <span className='fs-6 ms-1'> تومان </span>
                                        </>
                                    )
                                }
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
