import React from 'react'

export default function CourseBox({ title, cover, url }) {
    return (
        <div className='col-6 col-sm-4 col-lg-4 mt-5'>
            <div className="course-box bg-white rounded-4 pb-3">
                <a href={`/course/${url}`}>

                    <img src={cover}
                        alt={title}
                        className="course-box__img img-fluid w-100"
                    />
                </a>
                <div className="course-box__main px-3">
                    <div className="course-box-title-section mt-3 mb-1">
                        <a href={`/course/${url}`} className="course-box__title d-block">
                            {title}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}