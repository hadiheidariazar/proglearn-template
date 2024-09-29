import React, { useState } from 'react'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import swal from 'sweetalert'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import { Button, Modal } from 'react-bootstrap'

export default function Users() {

    const [isShowPromotedToAdminModal, setIsShowPromotedToAdminModal] = useState(false);
    const [isShowUserEditModal, setIsShowUserEditModal] = useState(false);

    const removeUser = () => {
        swal({
            text: 'آیا از حذف کاربر مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res) {
                deleteUser()
            }
        })
    }

    function deleteUser() {
        swal({
            text: 'کاربر مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    const banUser = () => {
        swal({
            text: 'آیا از بن کردن کاربر مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                btnMainUser()
            }
        })
    }

    function btnMainUser() {
        removeMainUserForBan()
    }

    function removeMainUserForBan() {
        swal({
            text: 'کاربر مورد نظر با موفقیت بن شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function registerNewUser() {
        addNewUser()
    }

    function addNewUser() {
        swal({
            text: "حساب کاربری جدید با موفقیت ساخته شد",
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function promotedToAdmin() {
        swal({
            text: 'کاربر مورد نظر با موفقیت به نقش مدیر ارتقا یافت',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    const demotedToUser = () => {
        swal({
            text: 'آیا از تنزل مدیر مورد نظر به کاربر مطمئن هستی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                demotedMainAdminToUser()
            }
        })
    }

    function demotedMainAdminToUser() {
        swal({
            text: 'مدیر مورد نظر با موفقیت به نقش کاربر تنزل یافت',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function editUserInfos() {
        swal({
            text: 'اطلاعات کاربر مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت کاربران" />

            <div className="container-fluid">

                <div className="home-content-edit bg-white rounded-3 pb-4">

                    <div className="home-content-users-title">
                        <span>
                            افزودن <span className="signup"> کاربر جدید </span>
                        </span>
                    </div>
                    <form className="form">
                        <div className="col-12 col-sm-6">
                            <div className="name input">
                                <label className="input-title" htmlFor='name'>نام و نام خانوادگی</label>
                                <input
                                    type="text"
                                    className='form-control mt-2 bg-secondary-500'
                                    id="name"
                                    placeholder="نام و نام خانوادگی کاربر را وارد کنید..."
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="family input">
                                <label className="input-title" htmlFor='username'>نام کاربری</label>
                                <input
                                    type="text"
                                    className='form-control mt-2 bg-secondary-500'
                                    id="username"
                                    placeholder="نام کاربری کاربر را وارد کنید..."
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="phone input">
                                <label className="input-title" htmlFor='phone'>شماره تلفن</label>
                                <input
                                    type="tel"
                                    className='form-control mt-2 bg-secondary-500'
                                    id="phone"
                                    placeholder="شماره تلفن کاربر را وارد کنید..."
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="email input">
                                <label className="input-title" htmlFor='email'>ایمیل</label>
                                <input
                                    type="email"
                                    className='form-control mt-2 bg-secondary-500'
                                    id="email"
                                    placeholder="ایمیل کاربر را وارد کنید..."
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="password input">
                                <label className="input-title" htmlFor='password'>رمز عبور</label>
                                <input
                                    type="password"
                                    className='form-control mt-2 bg-secondary-500'
                                    id="password"
                                    placeholder="رمز عبور کاربر را وارد کنید..."
                                />
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="bottom-form">
                                <div className="submit-btn">
                                    <button className='bg-main-color text-white btn fs-4 px-3' type='button' onClick={registerNewUser}>افزدون کاربر
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <DataTable title="کاربران" minWidthTable="670px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th>نام و نام خانوادگی</th>
                                <th>ایمیل</th>
                                <th>ویرایش</th>
                                <th>ارتقای نقش</th>
                                <th>حذف</th>
                                <th>بن</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='first-item'>1</td>
                                <td className='second-item'>هادی حیدری آذر</td>
                                <td className='last-item'>proglearn@gmail.com</td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowUserEditModal(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger edit-btn" onClick={() => demotedToUser()}>
                                        تنزل به کاربر
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeUser()}>
                                        حذف
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => banUser()}>
                                        بن
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className='first-item'>2</td>
                                <td className='second-item'>هادی حیدری آذر</td>
                                <td className='last-item'>proglearn@gmail.com</td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowUserEditModal(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowPromotedToAdminModal(true)
                                    }>
                                        ارتقا به مدیر
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeUser()}>
                                        حذف
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => banUser()}>
                                        بن
                                    </button>
                                </td>
                            </tr>

                            <Modal show={isShowPromotedToAdminModal} onHide={() => setIsShowPromotedToAdminModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ارتقای نقش به مدیر
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="name input">
                                            <label className="input-title mb-2" htmlFor='promoted-admin'> عنوان نقش </label>
                                            <input
                                                placeholder="عنوان نقش مدیر جدید را وارد کنید..."
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                                id="promoted-admin"
                                            />
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        promotedToAdmin()
                                        setIsShowPromotedToAdminModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> ارتقای نقش </Button>
                                    <Button onClick={() => setIsShowPromotedToAdminModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={isShowUserEditModal} onHide={() => setIsShowUserEditModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ویرایش کاربر
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="name input">
                                            <label className="input-title mb-2" htmlFor='name'> نام جدید </label>
                                            <input
                                                placeholder="نام جدید کاربر را وارد کنید..."
                                                type="text"
                                                id="name"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="username input">
                                            <label className="input-title mb-2" htmlFor='username'> نام کاربری جدید </label>
                                            <input
                                                placeholder="نام کاربری جدید کاربر را وارد کنید..."
                                                type="text"
                                                id="username"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="email input">
                                            <label className="input-title mb-2" htmlFor='email'> ایمیل جدید </label>
                                            <input
                                                placeholder="ایمیل جدید کاربر را وارد کنید..."
                                                type="email"
                                                id="email"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="tel input">
                                            <label className="input-title mb-2" htmlFor='tel'> شماره تلفن جدید </label>
                                            <input
                                                placeholder="شماره تلفن جدید کاربر را وارد کنید..."
                                                type="tel"
                                                id="tel"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        editUserInfos()
                                        setIsShowUserEditModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> تغییر اطلاعات </Button>
                                    <Button onClick={() => setIsShowUserEditModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>

            </div>
        </>
    )
}