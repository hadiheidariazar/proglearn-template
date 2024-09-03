import React from 'react'

export default function FooterItem({ title, children, isShow }) {
    return (
        <div className={`col-12 col-md-6 col-lg-4 mt-5 ${isShow ? "d-flex d-lg-none" : null}`}>
            <div className="footer-widgets__item">
                <span className="footer-widgets__title d-block fs-2 fw-bold">
                    {title}
                </span>

                {children}
            </div>
        </div>
    )
}
