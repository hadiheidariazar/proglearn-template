import React from 'react'
import swal from 'sweetalert'
import TitlePage from '../../../Components/TitlePage/TitlePage'

export default function UserDetails() {

    const updateDetails = () => {
        swal({
            text: 'آیا از تغییر اطلاعات حساب کاربری خود مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                swal({
                    text: 'اطلاعات حساب کاربری شما با موفقیت ویرایش شد',
                    icon: 'success',
                    buttons: 'متوجه شدم !'
                })
            }
        })
    }

    return (
        <>
            <TitlePage titlePage="جزئیات حساب من - پنل کاربری" />

            <div className="my-details bg-white p-4 rounded-4">
                <h3 className='title-section fw-bold pb-4 text-main-color'> جزئیات حساب من </h3>
                <div className="row mt-4">
                    <div className="col-12 col-sm-6 mb-3">
                        <label className='title-details fw-bold mb-3'> نام و نام خانوادگی </label>
                        <br />
                        <span className='details-value'> هادی حیدری آذر </span>
                    </div>
                    <div className="col-12 col-sm-6 mb-3 mt-3 mt-sm-0">
                        <label className='title-details fw-bold mb-3'> نام کاربری </label>
                        <br />
                        <span className='details-value'> hadiheidariazar </span>
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mb-3">
                        <label className='title-details fw-bold mb-3'> رمز عبور </label>
                        <br />
                        <span className='details-value'> 0123456 </span>
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mb-3">
                        <label className='title-details fw-bold mb-3'> شماره تلفن </label>
                        <br />
                        <span className='details-value'> 09120000000 </span>
                    </div>
                    <div className="col-12 mt-3">
                        <label className='title-details fw-bold mb-3'> ایمیل </label>
                        <br />
                        <span className='details-value'> hadiha010101@gmail.com </span>
                    </div>
                </div>
            </div>

            <div className="edit-my-details bg-white p-4 rounded-4 mt-5">
                <h3 className='title-section fw-bold pb-4 text-main-color'> تغییر جزئیات حساب </h3>
                <div className="row mt-4">
                    <div className="col-12 col-sm-6 mb-2">
                        <label htmlFor="name" className='fw-bold title-details'> نام و نام خانوادگی </label>
                        <input
                            className="edit-my-details-input form-control my-2 rounded-2"
                            type="text"
                            id="name"
                            placeholder="نام و نام خانوادگی"
                        />
                    </div>
                    <div className="col-12 col-sm-6 mb-2 mt-2 mt-sm-0">
                        <label htmlFor="username" className='fw-bold title-details'> نام کاربری </label>
                        <input
                            className="edit-my-details-input form-control my-2 rounded-2"
                            type="text"
                            id="username"
                            placeholder="نام کاربری"
                        />
                    </div>
                    <div className="col-12 col-sm-6 mb-2 mt-2">
                        <label htmlFor="password" className='fw-bold title-details'> رمز عبور </label>
                        <input
                            className="edit-my-details-input form-control my-2 rounded-2"
                            type="password"
                            id="password"
                            placeholder="رمز عبور"
                        />
                    </div>
                    <div className="col-12 col-sm-6 mt-2 mb-2">
                        <label htmlFor="phone" className='fw-bold title-details'> شماره تماس </label>
                        <input
                            className="edit-my-details-input form-control my-2 rounded-2"
                            type="tel"
                            id="phone"
                            placeholder="شماره تماس"
                        />
                    </div>
                    <div className="col-12 mt-2">
                        <label htmlFor="email" className='fw-bold title-details'> ایمیل </label>
                        <input
                            className="edit-my-details-input form-control my-2 rounded-2"
                            type="email"
                            id="email"
                            placeholder="ایمیل"
                        />
                    </div>
                    <div className="col-12 mt-4">
                        <button type='button' className='btn bg-main-color text-white fs-4 rounded-4 py-2' onClick={updateDetails}>
                            تغییر جزئیات
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}