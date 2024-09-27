import React from 'react'
import { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import swal from 'sweetalert'
import { Button, Modal } from 'react-bootstrap'

export default function AdminSessions() {

    const [isPendingRemoveSession, setIsPendingRemoveSession] = useState(false)
    const [isPendingGetSession, setIsPendingGetSession] = useState(true)
    const [isPendingAddSession, setIsPendingAddSession] = useState(false)
    const [isShowModalEditSession, setIsShowModalEditSession] = useState(false)
    const [courses, setCourses] = useState([])
    const [newSessionCourseTitle, setNewSessionCourseTitle] = useState("")
    const [newSessionIsFree, setNewSessionIsFree] = useState("رایگان")
    const [sessions, setSessions] = useState([])
    const [sessionIDEdit, setSessionIDEdit] = useState(null)
    const [sessionCourseIDEdit, setSessionCourseIDEdit] = useState(null)
    const [sessionTitleEdit, setSessionTitleEdit] = useState("")
    const [sessionTimeEdit, setSessionTimeEdit] = useState("")
    const [sessionIsFreeEdit, setSessionIsFreeEdit] = useState("")

    function showCourseTitle() {
        swal({
            text: "آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی",
            buttons: 'مشاهده کردم !'
        })
    }

    const removeSession = () => {
        swal({
            text: 'آیا از حذف جلسه مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                deleteMainSession()
            }
        })
    }

    function deleteMainSession() {
        swal({
            text: 'جلسه مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function createSession() {
        swal({
            text: 'جلسه جدید با موفقیت ساخته شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function updateSession() {
        swal({
            text: 'جلسه مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت جلسات  دوره ها" />

            <div className="container-fluid">

                <div id="home-content">
                    <div className="home-content-edit bg-white pb-4 rounded-3">
                        <div className="home-content-users-title px-4">
                            <span>
                                افزودن <span className="signup text-main-color"> جلسه جدید </span>
                            </span>
                        </div>
                        <form className="form">
                            <div className="col-12 col-sm-6">
                                <div className="name input">
                                    <label className="input-title" htmlFor='title'> عنوان </label>
                                    <input
                                        type="text"
                                        id='title'
                                        placeholder="عنوان جلسه را وارد کنید..."
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="time input">
                                    <label className="input-title" htmlFor='time'> زمان (ثانیه) </label>
                                    <input
                                        type="number"
                                        id='time'
                                        placeholder="زمان (ثانیه) جلسه را وارد کنید..."
                                        className='form-control mt-2 bg-secondary-500'
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="number input">
                                    <label className="input-title"> دوره مورد نظر </label>
                                    <select className='form-select mt-2 bg-secondary-500 border py-2 px-3 pe-5 select-course pe-5'>
                                        <option value="آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی">آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی</option>
                                        <option value="آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی">آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی</option>
                                        <option value="آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی">آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی</option>
                                        <option value="آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی">آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی</option>
                                        <option value="آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی">آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی</option>
                                        <option value="آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی">آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="number input">
                                    <label className="input-title"> وضعیت </label>
                                    <select className='form-select mt-2 bg-secondary-500 border py-2 px-3 pe-5 select-course pe-5'>
                                        <option value={"رایگان"}> رایگان </option>
                                        <option value={"غیر رایگان"}> غیر رایگان </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="bottom-form">
                                    <div className="submit-btn">
                                        <button className="bg-main-color text-white btn fs-4 px-3 py-2" type='button' onClick={createSession}>افزدون جلسه
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DataTable title="جلسات دوره ها" minWidthTable="460px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th> عنوان </th>
                                <th>زمان</th>
                                <th> دوره </th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='first-item'>1</td>
                                <td className='second-item'>
                                    آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                </td>
                                <td className='last-item'>13:52</td>
                                <td className='last-item'>
                                    <button type='button' className='btn btn-primary edit-btn' onClick={() => showCourseTitle()}> مشاهده </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowModalEditSession(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeSession()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>

                            <Modal show={isShowModalEditSession} onHide={() => setIsShowModalEditSession(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ویرایش جلسه
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="session-title input">
                                            <label className="input-title mb-2" htmlFor='title'> عنوان جدید </label>
                                            <input
                                                placeholder="عنوان جدید جلسه را وارد کنید..."
                                                type="text"
                                                id="title"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="session-time input">
                                            <label className="input-title mb-2" htmlFor='time'> زمان (ثانیه) جدید </label>
                                            <input
                                                placeholder="زمان جدید جلسه را وارد کنید..."
                                                type="number"
                                                id="time"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="number input">
                                            <label className="input-title"> وضعیت جدید </label>
                                            <select className='form-select mt-2 bg-secondary-500 border py-2 px-3 pe-5 select-course pe-5'>
                                                <option value="رایگان"> رایگان </option>
                                                <option value="غیر رایگان"> غیر رایگان </option>
                                            </select>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        updateSession()
                                        setIsShowModalEditSession(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> تغییر اطلاعات </Button>
                                    <Button onClick={() => setIsShowModalEditSession(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>

            </div>

        </>
    )
}
