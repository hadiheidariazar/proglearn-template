import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import swal from 'sweetalert'
import { Button, Modal } from 'react-bootstrap'

export default function AdminDiscount() {

    const [isShowCodeEditModal, setIsShowCodeEditModal] = useState(false)

    const removeDiscount = () => {
        swal({
            text: 'آیا از حذف کد تخفیف مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                deleteMainDiscount()
            }
        })
    }

    function deleteMainDiscount() {
        swal({
            text: 'کد تخفیف مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function createDiscountCode() {
        swal({
            text: 'کد تخفیف جدید با موفقیت ساخته شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function updateDiscountCode() {
        swal({
            text: 'کد تخفیف مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت کد تخفیف ها" />

            <div className="container-fluid">

                <div id="home-content">
                    <div className="home-content-edit bg-white pb-4 rounded-3">
                        <div className="home-content-users-title px-4">
                            <span>
                                افزودن <span className="signup text-main-color"> کد تخفیف جدید </span>
                            </span>
                        </div>
                        <form className="form">
                            <div className="col-12 col-sm-6">
                                <div className="code input">
                                    <label className="input-title" htmlFor='code'> کد </label>
                                    <input
                                        type="text"
                                        id='code'
                                        placeholder="کد تخفیف را وارد کنید..."
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="off input">
                                    <label className="input-title" htmlFor='off'> درصد تخفیف </label>
                                    <input
                                        className='form-control mt-2 bg-secondary-500'
                                        type="number"
                                        id='off'
                                        placeholder="درصد تخفیف را وارد کنید (مثال: 10)"
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="maxCount input">
                                    <label className="input-title" htmlFor='maxCount'> حداکثر تعداد </label>
                                    <input
                                        className='form-control mt-2 bg-secondary-500'
                                        type="number"
                                        id='maxCount'
                                        placeholder="حداکثر تعداد کد تخفیف را وارد کنید..."
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="number input">
                                    <label className="input-title"> دوره مورد نظر </label>
                                    <select className='form-select mt-2 bg-secondary-500 border py-2 px-3 select-course pe-5'>
                                        <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                        <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                        <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                        <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                        <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                        <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                        <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="bottom-form">
                                    <div className="submit-btn">
                                        <button className='bg-main-color text-white btn fs-4 px-3 py-2' type='button' onClick={createDiscountCode}>افزدون کد تخفیف
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DataTable title="کد تخفیف ها" minWidthTable="450px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th> کد </th>
                                <th>تعداد</th>
                                <th>تخفیف</th>
                                <th>دوره</th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='first-item'>1</td>
                                <td className='second-item'>hadiprog01</td>
                                <td className='last-item'>100</td>
                                <td className='last-item'>25%</td>
                                <td className='last-item'>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() => {
                                        swal({
                                            text: "آموزش تیلویند 0 تا 100 رایگان",
                                            buttons: 'مشاهده کردم !'
                                        })
                                    }}>
                                        مشاهده
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowCodeEditModal(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeDiscount()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>

                            <Modal show={isShowCodeEditModal} onHide={() => setIsShowCodeEditModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ویرایش کد تخفیف
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="newCode input">
                                            <label className="input-title mb-2" htmlFor='newCode'> کد جدید </label>
                                            <input
                                                placeholder="کد جدید تخفیف را وارد کنید..."
                                                type="text"
                                                id="newCode"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="newOff input">
                                            <label className="input-title mb-2" htmlFor='newOff'> درصد تخفیف جدید </label>
                                            <input
                                                placeholder="درصد جدید تخفیف را وارد کنید (مثال: 10)"
                                                type="number"
                                                id="newOff"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="newMaxCount input">
                                            <label className="input-title mb-2" htmlFor='newMaxCount'> حداکثر تعداد جدید </label>
                                            <input
                                                placeholder="حداکتر تعداد جدید تخفیف را وارد کنید..."
                                                type="number"
                                                id="newMaxCount"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="number input">
                                            <label className="input-title"> دوره مورد نظر </label>
                                            <select className='form-select mt-2 bg-secondary-500 px-3 pe-5 select-category'>
                                                <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                                <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                                <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                                <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                                <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                                <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                                <option value='آموزش تیلویند 0 تا 100 رایگان'>آموزش تیلویند 0 تا 100 رایگان</option>
                                            </select>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        updateDiscountCode()
                                        setIsShowCodeEditModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> تغییر اطلاعات </Button>
                                    <Button onClick={() => setIsShowCodeEditModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>

            </div>
        </>
    )
}