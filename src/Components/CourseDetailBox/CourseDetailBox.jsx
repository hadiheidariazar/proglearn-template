import React from 'react'
import "./CourseDetailBox.css"

export default function CourseDetailBox({ title, text, iconBox }) {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="course-boxes__box d-flex rounded-3 p-4 my-2">
                <div className="course-boxes__box-right d-flex justify-content-center align-items-center">
                    {iconBox()}
                </div>
                <div className="course-boxes__box-left d-flex ms-3">
                    <span className="course-boxes__box-left-title">{title}</span>
                    <span className="course-boxes__box-left--subtitle fw-bold">{text}</span>
                </div>
            </div>
        </div>
    )
}
