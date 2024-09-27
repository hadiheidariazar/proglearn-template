import React, { useEffect, useState } from 'react'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import swal from 'sweetalert'
import { Button, Modal } from 'react-bootstrap'

export default function Menus() {

    const [menus, setMenus] = useState([])
    const [isPendingRemoveMenus, setIsPendingRemoveMenus] = useState(false)
    const [isShowMenuEditModal, setIsShowMenuEditModal] = useState(false)
    const [isPendingGetMenus, setIsPendingGetMenus] = useState(true)
    const [isPendingGetCategories, setIsPendingGetCategories] = useState(true)
    const [isPendingAddNewMenu, setIsPendingAddNewMenu] = useState(false)
    const [categories, setCategories] = useState([])
    const [newMenuCategoryTitle, setnewMenuCategoryTitle] = useState("")
    const [menuIDEdit, setMenuIDEdit] = useState("")
    const [menuTitleEdit, setMenuTitleEdit] = useState("")
    const [menuShortNameEdit, setMenuShortNameEdit] = useState("")
    const [menuCategoryEdit, setMenuCategoryEdit] = useState("")

    function createMenu() {
        swal({
            text: 'منو جدید با موفقیت ساخته شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    const removeMenu = () => {
        swal({
            text: 'آیا از حذف منو مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                deleteMainMenu()
            }
        })
    }

    function deleteMainMenu() {
        swal({
            text: 'منو مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function updateMenu() {
        swal({
            text: 'منو مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت منو ها" />

            <div className="container-fluid">

                <div id="home-content">
                    <div className="home-content-edit bg-white pb-4 rounded-3">
                        <div className="home-content-users-title px-4">
                            <span>
                                افزودن <span className="signup text-main-color"> منو جدید </span>
                            </span>
                        </div>
                        <form className="form">
                            <div className="col-12 col-sm-6">
                                <div className="name input">
                                    <label className="input-title"> عنوان </label>
                                    <input
                                        type="text"
                                        id='title'
                                        placeholder="عنوان منو را وارد کنید..."
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="price input">
                                    <label className="input-title"> اسم کوتاه </label>
                                    <input
                                        type="text"
                                        id='shortname'
                                        placeholder="اسم کوتاه دوره را وارد کنید (مثال: react-js)"
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="number input">
                                    <label className="input-title">دسته‌ بندی</label>
                                    <select className='form-select mt-2 bg-secondary-500 px-3 pe-5 select-category'>
                                        <option key="برنامه نویسی فرانت اند">برنامه نویسی فرانت اند</option>
                                        <option key="برنامه نویسی بک اند">برنامه نویسی بک اند</option>
                                        <option key="برنامه نویسی پایتون">برنامه نویسی پایتون</option>
                                        <option key="برنامه نویسی امنیت">برنامه نویسی امنیت</option>
                                        <option key="مهارت های نرم">مهارت های نرم</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="bottom-form">
                                    <div className="submit-btn">
                                        <button className='bg-main-color text-white btn fs-4 px-3 py-2' type='button' onClick={createMenu}>افزدون منو
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DataTable title="منو ها" minWidthTable="400px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th> عنوان </th>
                                <th> دسته بندی </th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='first-item'>1</td>
                                <td className='second-item'>
                                    <a href='/course/tailwindcss'>
                                        آموزش جاوا اسکریپت
                                    </a>
                                </td>
                                <td className='last-item'>
                                    برنامه نویسی فرانت اند
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowMenuEditModal(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeMenu()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>

                            <Modal show={isShowMenuEditModal} onHide={() => setIsShowMenuEditModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ویرایش منو
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="course-title input">
                                            <label className="input-title mb-2" htmlFor='title'> عنوان جدید </label>
                                            <input
                                                type="text"
                                                id='title'
                                                placeholder="عنوان جدید منو را وارد کنید..."
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="shortname input">
                                            <label className="input-title mb-2" htmlFor='shortname'> اسم کوتاه جدید </label>
                                            <input
                                                type="text"
                                                id='shortname'
                                                placeholder="اسم کوتاه جدید منو را وارد کنید (مثال: react-js)"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="number input">
                                            <label className="input-title">دسته‌ بندی جدید</label>
                                            <select className='form-select mt-2 bg-secondary-500 px-3 pe-5 select-category'>
                                                <option key="برنامه نویسی فرانت اند">برنامه نویسی فرانت اند</option>
                                                <option key="برنامه نویسی بک اند">برنامه نویسی بک اند</option>
                                                <option key="برنامه نویسی پایتون">برنامه نویسی پایتون</option>
                                                <option key="برنامه نویسی امنیت">برنامه نویسی امنیت</option>
                                                <option key="مهارت های نرم">مهارت های نرم</option>
                                            </select>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        updateMenu()
                                        setIsShowMenuEditModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> تغییر اطلاعات </Button>
                                    <Button onClick={() => setIsShowMenuEditModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>

            </div>
        </>
    )
}