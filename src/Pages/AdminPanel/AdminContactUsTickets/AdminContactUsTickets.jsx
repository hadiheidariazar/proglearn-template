import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import swal from 'sweetalert'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import "./AdminContactUsTickets.css"

export default function AdminContactUsTickets() {

    const [isShowAnwserToCriticize, setIsShowAnwserToCriticize] = useState(false)
    const [isShowMainTicketBodyModal, setIsShowMainTicketBodyModal] = useState(false)
    const [isShowReplyMainTicketModal, setIsShowReplyMainTicketModal] = useState(false)

    const removeCriticize = () => {
        swal({
            text: 'آیا از حذف پیغام مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                removeMainCriticize()
            }
        })
    }

    function removeMainCriticize() {
        swal({
            text: 'پیغام مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    const showCriticizeBody = () => {
        swal({
            text: 'متن تستی بی معنی برای محتوای پیغام',
            buttons: 'مشاهده کردم !'
        })
    }

    function sendAnwserCriticize() {
        swal({
            text: 'پاسخ شما برای پیغام مورد نظر ارسال شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function showTitleMainTicket() {
        swal({
            text: "متن تستی بی معنی برای محتوای موضوع تیکت",
            buttons: 'مشاهده کردم !'
        })
    }

    const removeTicket = () => {
        swal({
            text: 'آیا از حذف تیکت مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                deleteMainTicket()
            }
        })
    }

    function deleteMainTicket() {
        swal({
            text: 'تیکت مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    const replyMainTicket = () => {
        sendReply()
    }

    function sendReply() {
        swal({
            text: 'پاسخ شما برای تیکت مورد نظر با موفقیت ارسال شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت پیغام ها و تیکت ها" />

            <DataTable title="پیغام ها" minWidthTable="530px">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: '10px' }}>شناسه</th>
                            <th>نام و نام خانوادگی</th>
                            <th>ایمیل</th>
                            <th>شماره تماس</th>
                            <th>پیغام</th>
                            <th>پاسخ</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="first-item text-white bg-success">1</td>
                            <td className='second-item'>هادی حیدری آذر</td>
                            <td className='last-item'>proglearn@gmail.com</td>
                            <td className='last-item'>09123456789</td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() => showCriticizeBody()}>
                                    مشاهده
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                    setIsShowAnwserToCriticize(true)
                                }>
                                    پاسخ
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger delete-btn" onClick={() => removeCriticize()}>
                                    حذف
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="first-item text-white bg-danger">2</td>
                            <td className='second-item'>هادی حیدری آذر</td>
                            <td className='last-item'>proglearn@gmail.com</td>
                            <td className='last-item'>09123456789</td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() => showCriticizeBody()}>
                                    مشاهده
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                    setIsShowAnwserToCriticize(true)
                                }>
                                    پاسخ
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger delete-btn" onClick={() => removeCriticize()}>
                                    حذف
                                </button>
                            </td>
                        </tr>

                        <Modal show={isShowAnwserToCriticize} onHide={() => setIsShowAnwserToCriticize(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                        >
                            <Modal.Header closeButton className='pe-4'>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    پاسخ شما
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='form'>
                                <div className="col-12">
                                    <div className="name input">
                                        <label className="input-title mb-2" htmlFor='anwser-body'> متن پاسخ شما </label>
                                        <textarea
                                            placeholder="پاسخ خود را وارد کنید..."
                                            className="form-control border bg-secondary-500 mt-2"
                                            rows={7}
                                            id="anwser-body"
                                        />
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                <Button onClick={() => {
                                    sendAnwserCriticize()
                                    setIsShowAnwserToCriticize(false)
                                }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> ارسال پاسخ </Button>
                                <Button onClick={() => setIsShowAnwserToCriticize(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                            </Modal.Footer>
                        </Modal>
                    </tbody>
                </table>
            </DataTable>

            <DataTable title="تیکت ها" minWidthTable="530px">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: '10px' }}>شناسه</th>
                            <th>نام و نام خانوادگی</th>
                            <th>شماره تماس</th>
                            <th>موضوع</th>
                            <th>متن</th>
                            <th>پاسخ</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="first-item text-white bg-success">1</td>
                            <td className='second-item'>هادی حیدری آذر</td>
                            <td className='last-item'>09123456789</td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() => showTitleMainTicket()}>
                                    مشاهده
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                    setIsShowMainTicketBodyModal(true)
                                }>
                                    مشاهده
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                    setIsShowReplyMainTicketModal(true)
                                }>
                                    پاسخ
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger delete-btn" onClick={() => removeTicket()}>
                                    حذف
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="first-item text-white bg-danger">2</td>
                            <td className='second-item'>هادی حیدری آذر</td>
                            <td className='last-item'>09123456789</td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() => showTitleMainTicket()}>
                                    مشاهده
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                    setIsShowMainTicketBodyModal(true)
                                }>
                                    مشاهده
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                    setIsShowReplyMainTicketModal(true)
                                }>
                                    پاسخ
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger delete-btn" onClick={() => removeTicket()}>
                                    حذف
                                </button>
                            </td>
                        </tr>

                        <Modal show={isShowMainTicketBodyModal} onHide={() => setIsShowMainTicketBodyModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                        >
                            <Modal.Header closeButton className='pe-4'>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    متن تیکت
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='show-ticket-body px-4'>
                                <p className='ticket-body-text'>
                                    متن تستی برای بی معنی برای محتوای تیکت
                                </p>
                            </Modal.Body>
                            <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                <Button onClick={() => setIsShowMainTicketBodyModal(false)} variant="success" className='p-2 fs-4 text-center btn px-3'> مشاهده کردم ! </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={isShowReplyMainTicketModal} onHide={() => setIsShowReplyMainTicketModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                        >
                            <Modal.Header closeButton className='pe-4'>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    پاسخ شما
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='form'>
                                <div className="col-12">
                                    <div className="name input">
                                        <label className="input-title" htmlFor='replyBody'> متن پاسخ شما </label>
                                        <textarea id="replyBody" className='form-control mt-3 fs-5 bg-secondary-500' rows="7" placeholder='پاسخ خود را وارد کنید...'></textarea>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                <Button onClick={() => {
                                    replyMainTicket()
                                    setIsShowReplyMainTicketModal(false)
                                }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> ارسال پاسخ </Button>
                                <Button onClick={() => setIsShowReplyMainTicketModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                            </Modal.Footer>
                        </Modal>
                    </tbody>
                </table>
            </DataTable>
        </>
    )
}