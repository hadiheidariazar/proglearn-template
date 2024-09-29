import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import swal from 'sweetalert'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import "./AdminComments.css"

export default function AdminComments() {

    const [isShowSeeCommentBodyModal, setIsShowSeeCommentBodyModal] = useState(false)
    const [isShowSeeReplyCommentBodyModal, setIsShowSeeReplyCommentBodyModal] = useState(false)
    const [isShowSeeCommentEditModal, setIsShowSeeCommentEditModal] = useState(false)
    const [isShowReplyCommentModal, setIsShowReplyCommentModal] = useState(false)

    const showCourseName = () => {
        swal({
            text: "آموزش تیلویند 0 تا 100 رایگان",
            buttons: 'مشاهده کردم !'
        })
    }

    const removeComment = () => {
        swal({
            text: 'آیا از حذف دیدگاه مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                deleteMainComment()
            }
        })
    }

    function deleteMainComment() {
        swal({
            text: 'دیدگاه مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function updateCommentBody() {
        swal({
            text: 'دیدگاه مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function sendReplyComment() {
        swal({
            text: 'پاسخ شما به دیدگاه مورد نظر با موفقیت ثبت شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    const removeReply = () => {
        swal({
            text: 'آیا از حذف پاسخ مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                deleteMainReply()
            }
        })
    }

    function deleteMainReply() {
        swal({
            text: 'پاسخ مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت دیدگاه ها" />

            <div className="container-fluid">
                <DataTable title="دیدگاه ها" minWidthTable="500px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th> کاربر </th>
                                <th> دوره </th>
                                <th>دیدگاه</th>
                                <th>پاسخ</th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="first-item text-white bg-danger">1</td>
                                <td className='second-item'>هادی حیدری آذر</td>
                                <td className='last-item'>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() => showCourseName()}>
                                        مشاهده
                                    </button>
                                </td>
                                <td className='last-item'>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowSeeCommentBodyModal(true)
                                    }>
                                        مشاهده
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowReplyCommentModal(true)
                                    }>
                                        پاسخ
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowSeeCommentEditModal(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeComment()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="first-item text-white bg-success">2</td>
                                <td className='second-item'>هادی حیدری آذر</td>
                                <td className='last-item'>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() => showCourseName()}>
                                        مشاهده
                                    </button>
                                </td>
                                <td className='last-item'>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowSeeCommentBodyModal(true)
                                    }>
                                        مشاهده
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowReplyCommentModal(true)
                                    }>
                                        پاسخ
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowSeeCommentEditModal(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeComment()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>

                            <Modal show={isShowSeeCommentEditModal} onHide={() => setIsShowSeeCommentEditModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ویرایش دیدگاه
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="name input">
                                            <label className="input-title mb-2" htmlFor='newBody'> متن دیدگاه جدید </label>
                                            <textarea
                                                placeholder="متن دیدگاه جدید را وارد کنید..."
                                                className="border bg-secondary-500 mt-2 p-2 w-100 bg-secondary-500"
                                                id="newBody"
                                                rows={8}
                                            ></textarea>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        updateCommentBody()
                                        setIsShowSeeCommentEditModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> تغییر اطلاعات </Button>
                                    <Button onClick={() => setIsShowSeeCommentEditModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={isShowReplyCommentModal} onHide={() => setIsShowReplyCommentModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        پاسخ شما
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="name input">
                                            <label className="input-title mb-2" htmlFor='reply-content'> متن پاسخ شما </label>
                                            <textarea
                                                placeholder="متن پاسخ خود را وارد کنید..."
                                                className="border bg-secondary-500 mt-2 p-2 w-100 bg-secondary-500"
                                                id="reply-content"
                                                rows={8}
                                            ></textarea>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        sendReplyComment()
                                        setIsShowReplyCommentModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> ارسال پاسخ </Button>
                                    <Button onClick={() => setIsShowReplyCommentModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={isShowSeeCommentBodyModal} onHide={() => setIsShowSeeCommentBodyModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        مشاهده دیدگاه
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='comment-body-content'>
                                        <p className="fs-4 text-secondary">
                                            <span> سلام <br /> </span>
                                            <span> متن تستی بی معنی برای محتوای دیدگاه <br /> </span>
                                        </p>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => setIsShowSeeCommentBodyModal(false)} variant="success" className='py-2 px-3 fs-4 text-center'> مشاهده کردم ! </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>

                <DataTable title="پاسخ ها" minWidthTable="430px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th> کاربر </th>
                                <th>دیدگاه</th>
                                <th>پاسخ</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="first-item">1</td>
                                <td className='second-item'>هادی حیدری آذر</td>
                                <td className='last-item'>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() => 
                                        setIsShowSeeCommentBodyModal(true)
                                    }>
                                        مشاهده
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() => 
                                        setIsShowSeeReplyCommentBodyModal(true)
                                    }>
                                        مشاهده
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeReply()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>

                            <Modal show={isShowSeeReplyCommentBodyModal} onHide={() => setIsShowSeeReplyCommentBodyModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        مشاهده پاسخ
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='comment-body-content'>
                                        <p className="fs-4 text-secondary">
                                            <span> سلام <br /> </span>
                                            <span> متن تستی بی معنی برای محتوای پاسخ دیدگاه <br /> </span>
                                        </p>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => setIsShowSeeReplyCommentBodyModal(false)} variant="success" className='py-2 px-3 fs-4 text-center'> مشاهده کردم ! </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>
            </div>
        </>
    )
}