import React, { useState } from 'react'
import swal from 'sweetalert'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import "./AdminCourses.css"
import { Button, Modal } from 'react-bootstrap'

export default function AdminCourses() {

    const [isShowCourseEditModal, setIsShowCourseEditModal] = useState(false)

    const removeCourse = () => {
        swal({
            text: "آیا از حذف دوره مورد نظر مطمئنی؟",
            icon: 'warning',
            buttons: ["خیر", "بله"]
        }).then(res => {
            if (res === true) {
                removeMainCourse()
            }
        })
    }

    function removeMainCourse() {
        swal({
            text: 'دوره ی مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function createNewCourse() {
        swal({
            text: "دوره جدید با موفقیت ساخته شد",
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function editCourseInfos() {
        swal({
            text: 'دوره مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت دوره ها" />

            <div className='container-fluid'>

                <div id="home-content">
                    <div className="home-content-edit bg-white pb-4 rounded-3">
                        <div className="home-content-users-title px-4">
                            <span>
                                افزودن <span className="signup text-main-color"> دوره جدید </span>
                            </span>
                        </div>
                        <form className="form">
                            <div className="col-12 col-sm-6">
                                <div className="name input">
                                    <label className="input-title"> عنوان </label>
                                    <input
                                        type="text"
                                        className='form-control mt-2 bg-secondary-500'
                                        id='title'
                                        placeholder="عنوان دوره را وارد کنید..."
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="price input">
                                    <label className="input-title"> قیمت (تومان) </label>
                                    <input
                                        type="number"
                                        id='price'
                                        placeholder="قیمت دوره را وارد کنید (مثال: 100000)"
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="number input">
                                    <label className="input-title">درصد تخفیف</label>
                                    <input
                                        type="number"
                                        id='off'
                                        className='form-control mt-2 bg-secondary-500'
                                        placeholder="درصد تخفیف دوره را وارد کنید (مثال: 10)"
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
                            <div className="col-12 col-sm-6">
                                <div className="price input">
                                    <label className="input-title"> پیش نیاز ها </label>
                                    <input
                                        type="text"
                                        id='dependencies'
                                        placeholder="پیش نیاز های دوره را وارد کنید..."
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                <div className="number input">
                                    <label className="input-title"> نام مدرس </label>
                                    <select className='form-select mt-2 bg-secondary-500 px-3 pe-5 select-category'>
                                        <option value="هادی حیدری آذر"> هادی حیدری آذر </option>
                                        <option value="هادی حیدری آذر"> هادی حیدری آذر </option>
                                        <option value="هادی حیدری آذر"> هادی حیدری آذر </option>
                                        <option value="هادی حیدری آذر"> هادی حیدری آذر </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
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
                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                <div className="file input">
                                    <label className="input-title">تصویر</label>
                                    <input type="file" id="file" className='py-2' accept='image/*' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 order-sm-2 mt-2 mt-sm-0">
                                <div className="number input">
                                    <label className="input-title"> وضعیت </label>
                                    <select className='form-select mt-2 bg-secondary-500 px-3 pe-5 select-category'>
                                        <option value="پیش فروش"> پیش فروش </option>
                                        <option value="در حال برگزاری"> در حال برگزاری </option>
                                        <option value="به اتمام رسیده"> به اتمام رسیده </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 order-sm-1">
                                <div className="price input">
                                    <label className="input-title"> توضیحات </label>
                                    <textarea
                                        id='description'
                                        placeholder="توضیحات دوره را وارد کنید..."
                                        className='form-control mt-2 bg-secondary-500 course-description'
                                        rows={7}
                                    />
                                </div>
                            </div>
                            <div className="col-12 order-sm-3">
                                <div className="bottom-form">
                                    <div className="submit-btn">
                                        <button className='bg-main-color text-white btn fs-4 px-3 py-2' type='button' onClick={createNewCourse}>
                                            افزدون دوره
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DataTable title="دوره ها" minWidthTable="670px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th> عنوان </th>
                                <th>قیمت</th>
                                <th>تخفیف</th>
                                <th>وضعیت</th>
                                <th>دسته بندی</th>
                                <th>مدرس</th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='first-item'>1</td>
                                <td className='second-item'>
                                    <a href='/course/tailwindcss'>
                                        آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                    </a>
                                </td>
                                <td className='last-item'>1,250,000</td>
                                <td className='last-item'>
                                    25%
                                </td>
                                <td className='last-item'>به اتمام رسیده</td>
                                <td className='last-item'>برنامه نویسی فرانت اند</td>
                                <td className='last-item'>هادی حیدری آذر</td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() => setIsShowCourseEditModal(true)}>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeCourse()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>


                            <Modal show={isShowCourseEditModal} onHide={() => setIsShowCourseEditModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" scrollable={true}
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ویرایش دوره
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="course-title input">
                                            <label className="input-title mb-2" htmlFor='title'> عنوان جدید </label>
                                            <input
                                                placeholder="عنوان جدید دوره را وارد کنید..."
                                                type="text"
                                                id="title"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="price input">
                                            <label className="input-title mb-2" htmlFor='price'>قیمت جدید </label>
                                            <input
                                                placeholder="قیمت جدید دوره را وارد کنید..."
                                                type="number"
                                                id="price"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="off input">
                                            <label className="input-title mb-2" htmlFor='off'> درصد تخفیف جدید </label>
                                            <input
                                                placeholder="درصد تخفیف جدید دوره را وارد کنید..."
                                                type="number"
                                                id="off"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="shortname input">
                                            <label className="input-title mb-2" htmlFor='shortname'> اسم کوتاه جدید </label>
                                            <input
                                                placeholder="اسم کوتاه جدید دوره را وارد کنید (مثال: react-js)"
                                                type="text"
                                                id="shortname"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="dependencies input">
                                            <label className="input-title mb-2" htmlFor='dependencies'> پیش نیاز های جدید </label>
                                            <input
                                                placeholder="پیش نیاز های جدید دوره را وارد کنید..."
                                                type="text"
                                                id="dependencies"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="number input">
                                            <label className="input-title"> نام مدرس جدید </label>
                                            <select className='form-select mt-2 bg-secondary-500 px-3 pe-5 select-category'>
                                                <option value="هادی حیدری آذر"> هادی حیدری آذر </option>
                                                <option value="هادی حیدری آذر"> هادی حیدری آذر </option>
                                                <option value="هادی حیدری آذر"> هادی حیدری آذر </option>
                                                <option value="هادی حیدری آذر"> هادی حیدری آذر </option>
                                            </select>
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
                                    <div className="col-12 mt-2">
                                        <div className="file input">
                                            <label className="input-title"> تصویر جدید </label>
                                            <input type="file" id="file" className='py-2' accept='image/*' />
                                            <img src='/images/courses/tailwindcss.jpg' alt='Course Image' style={{ width: '100px', height: '50px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="number input">
                                            <label className="input-title"> وضعیت جدید </label>
                                            <select className='form-select mt-2 bg-secondary-500 px-3 pe-5 select-category'>
                                                <option value="به اتمام رسیده"> به اتمام رسیده </option>
                                                <option value="در حال برگزاری"> در حال برگزاری </option>
                                                <option value="پیش فروش">پیش فروش </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="price input">
                                            <label className="input-title" htmlFor='description'> توضیحات </label>
                                            <textarea
                                                id='description'
                                                placeholder="توضیحات جدید دوره را وارد کنید..."
                                                className='form-control mt-2 bg-secondary-500 course-description'
                                                rows={7}
                                            ></textarea>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        editCourseInfos()
                                        setIsShowCourseEditModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> تغییر اطلاعات </Button>
                                    <Button onClick={() => setIsShowCourseEditModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>
            </div>
        </>
    )
}