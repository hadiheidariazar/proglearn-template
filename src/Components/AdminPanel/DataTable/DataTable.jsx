import React from 'react'

export default function DataTable({ children, title, minWidthTable }) {
  return (
    <div className="home-content-latset-users pb-2 px-3">
      <div className="home-content-users-title">
        <span>
          لیست <span className="signup">{title}</span>
        </span>
      </div>
      <div className="home-content-users-table" style={{minWidth: minWidthTable}}>{children}</div>
    </div>
  )
}