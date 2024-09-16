import React from 'react'

export default function InfosBox({ size, icon, title, description, type }) {
    return (
        <div className={`${size}`}>
            <div className={`${type}-box d-flex p-3 rounded-5`}>
                <div className="icon-box rounded-5">
                    {icon()}
                </div>
                <div className="desctiption-box d-grid align-items-center">
                    <h4 className='title-box px-4 fw-bold text-white'> {title} </h4>
                    <h4 className='desc-box px-4 fw-bold text-white'> {description}</h4>
                </div>
            </div>
        </div>
    )
}