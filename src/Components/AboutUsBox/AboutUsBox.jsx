import React from 'react'
import "./AboutUsBox.css"

export default function AboutUsBox({ title, desc, iconSection }) {
    return (
        <div className="col-12 col-md-6">
            <div className="about-us__box mt-4 d-flex align-items-center rounded-3 py-4 px-3">
                <div className="about-us__box-right">
                    {iconSection()}
                </div>
                <div className="about-us__box-left d-flex ms-3">
                    <span className="about-us__box-title fw-bold fs-3">{title}</span>
                    <span className="about-us__box-text mt-3">
                        {desc}
                    </span>
                </div>
            </div>
        </div>
    )
}
