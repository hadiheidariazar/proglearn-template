import React, { useState } from 'react'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import swal from "sweetalert";
import "./AdminCategories.css"
import { Button, Modal } from 'react-bootstrap'
import TitlePage from '../../../Components/TitlePage/TitlePage';

export default function AdminCategories() {

    const [isShowEditCategoryModal, setIsShowEditCategoryModal] = useState(false)

    function createNewCategory() {
        swal({
            text: 'دسته بندی جدید با موفقیت ساخته شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    const removeCategory = () => {
        swal({
            text: 'آیا از حذف دسته بندی مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ["خیر", "بله"]
        }).then(res => {
            if (res === true) {
                deleteMainCategory()
            }
        })
    }

    function deleteMainCategory() {
        swal({
            text: 'دسته بندی مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function updateCategory() {
        swal({
            text: 'دسته بندی مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت دسته بندی ها" />

            <div className='container-fluid'>
                <div id="home-content">
                    <div className="home-content-edit bg-white pb-4 rounded-3">
                        <div className="home-content-users-title">
                            <span>
                                افزودن <span className="signup"> دسته بندی جدید </span>
                            </span>
                        </div>
                        <form className="form">
                            <div className="col-12 col-sm-6">
                                <div className="name input">
                                    <label className="input-title mb-2" htmlFor='title'>عنوان</label>
                                    <input
                                        type="text"
                                        id="title"
                                        placeholder="عنوان را وارد کنید..."
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="name input">
                                    <label className="input-title mb-2" htmlFor='shortname'>اسم کوتاه</label>
                                    <input
                                        type="text"
                                        id="shortname"
                                        placeholder="اسم کوتاه را وارد کنید (مثال: react-js)"
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="bottom-form">
                                    <div className="submit-btn">
                                        <button className='bg-main-color text-white btn fs-4 px-3 py-2' type='button' onClick={createNewCategory}>افزدون دسته بندی
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DataTable title="دسته بندی ها" minWidthTable="350px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th> عنوان </th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='first-item'>1</td>
                                <td className='second-item'>
                                    برنامه نویسی فرانت اند
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowEditCategoryModal(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeCategory()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>

                            <Modal show={isShowEditCategoryModal} onHide={() => setIsShowEditCategoryModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        تغییر اطلاعات دسته بندی
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="name input">
                                            <label className="input-title mb-2" htmlFor='title'> عنوان جدید </label>
                                            <input
                                                type="text"
                                                id="title"
                                                placeholder="عنوان جدید را وارد کنید..."
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="name input">
                                            <label className="input-title mb-2" htmlFor='shortname'> اسم کوتاه جدید </label>
                                            <input
                                                type="text"
                                                id="shortname"
                                                placeholder="اسم کوتاه جدید را وارد کنید (مثال: react-js)"
                                            />
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        updateCategory()
                                        setIsShowEditCategoryModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> تغییر اطلاعات </Button>
                                    <Button onClick={() => setIsShowEditCategoryModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>
            </div>
        </>
    )
}