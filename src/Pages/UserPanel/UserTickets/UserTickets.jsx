import React from 'react'
import { BsTicketDetailed } from 'react-icons/bs'
import { MdSpeakerNotesOff, MdSpeakerNotes } from 'react-icons/md'
import swal from 'sweetalert'
import InfosBox from '../../../Components/UserPanel/InfosBox/InfosBox'
import TitlePage from '../../../Components/TitlePage/TitlePage'

export default function UserTickets() {

    const createTicket = () => {
        swal({
            text: 'آیا از ارسال تیکت خود مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                swal({
                    text: 'تیکت شما به مدیران سایت با موفقیت ارسال شد',
                    icon: 'success',
                    buttons: 'متوجه شدم !'
                })
            }
        })
    }

    return (
        <>

            <TitlePage titlePage="تیکت ها - پنل کاربری" />

            {location.search.length ? (
                <section className='p-4 bg-white rounded-4 ticket-infos'>
                    <h3 className='title-section fw-bold pb-4 text-main-color'> عنوان تستی برای تیکت ها </h3>

                    <div className="row mt-4">
                        <div className="col-12 ticket-container">
                            <div className="ticket-body text-secondary p-3">
                                <h4 className='fw-bold text-body'> هادی حیدری آذر </h4>
                                <p className='created-at-ticket'> 1402/6/10 </p>
                                <p className='ticket-body-text'>
                                    <span> سلام <br /> </span>
                                    <span> متن تستی بی معنی برای طراحی سایت  متن تستی بی معنی برای طراحی سایت  متن تستی بی معنی برای طراحی سایت  متن تستی بی معنی برای طراحی سایت  متن تستی بی معنی برای طراحی سایت  متن تستی بی معنی برای طراحی سایت  متن تستی بی معنی برای طراحی سایت <br /> </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5" style={{ direction: 'ltr' }}>
                        <div className="col-12 ticket-container">
                            <div className="reply-ticket-body text-secondary p-3">
                                <h4 className='fw-bold text-body'> هادی حیدری آذر </h4>
                                <p className='created-at-ticket'> 1402/6/10 </p>
                                <p className='reply-ticket-body-text'>
                                    <span> سلام <br /> </span>
                                    <span> متن تستی بی معنی برای طراحی سایت متن تستی بی معنی برای طراحی سایت  <br /> </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            ) : (
                <>
                    <div className="sidebar-box-infos d-flex row">
                        <InfosBox
                            title="کل تیکت ها"
                            description='6 تیکت'
                            icon={BsTicketDetailed}
                            size={"col-12 col-sm-6 col-md-4 col-xl-4"}
                            type="tickets"
                        />
                        <InfosBox
                            title="پاسخ داده شده"
                            description="3 تیکت"
                            icon={MdSpeakerNotes}
                            size={"col-12 col-sm-6 col-md-4 col-xl-4 mt-4 mt-sm-0"}
                            type="money-courses"
                        />
                        <InfosBox
                            title="پاسخ داده نشده"
                            description="3 تیکت"
                            icon={MdSpeakerNotesOff}
                            size={"col-12 col-sm-6 col-md-4 col-xl-4 mt-4 mt-md-0"}
                            type="courses"
                        />
                    </div>

                    <section className="send-new-ticket p-4 bg-white rounded-4">
                        <h3 className='title-section fw-bold pb-4 text-main-color'> ارسال تیکت </h3>
                        <div className="row mt-5">
                            <div className="col-12">
                                <label htmlFor='department' className='fw-bold mb-3'> دپارتمان </label>
                                <select className='form-select fs-4 py-2 bg-secondary-500' id='department'>
                                    <option value="دپارتمان مورد نظر...">دپارتمان مورد نظر...</option>
                                    <option value="مالی">مالی</option>
                                    <option value="ارتباط با مدیریت">ارتباط با مدیریت</option>
                                    <option value="پشتیبانی">پشتیبانی</option>
                                    <option value="مشاوره">مشاوره</option>
                                </select>
                            </div>
                            <div className="col-12 my-5">
                                <label htmlFor="title-ticket" className='fw-bold mb-3'> موضوع تیکت </label>
                                <input type="text" id='title-ticket' className='form-control bg-secondary-500 py-2' placeholder='موضوع تیکت خود را وارد کنید...' />
                            </div>
                            <div className="col-12">
                                <label htmlFor="description-ticket" className='fw-bold mb-3'> متن تیکت </label>
                                <textarea type="text" id='description-ticket' rows={8} className='form-control bg-secondary-500 py-2' placeholder='متن تیکت خود را وارد کنید...'></textarea>
                            </div>
                            <div className="col-12 mt-5">
                                <button type='button' className='btn bg-main-color p-3 fs-4 text-white rounded-4' onClick={createTicket}> ارسال تیکت </button>
                            </div>
                        </div>
                    </section>

                    <section className='tickets-details p-4 bg-white rounded-4 mt-5'>
                        <h3 className='title-section fw-bold pb-4 text-main-color'> تیکت های شما </h3>
                        <div className="row mt-4">
                            <div className="col-12 my-2 ticket-item py-3 px-4 rounded-5">
                                <a href='?id=1' className='title-ticket'> عنوان تستی برای تیکت ها </a>
                                <div className="details-send-tickets mt-3">
                                    <span className="no-replyed px-1 rounded-2"> پاسخ داده نشده </span>
                                    <span className='mx-2 department px-1 rounded-2'> مشاوره </span>
                                    <span className='date text-secondary bg-secondary-500 px-1 rounded-2'> 1402/6/10 </span>
                                </div>
                            </div>
                            <div className="col-12 my-2 ticket-item py-3 px-4 rounded-5">
                                <a href='?id=2' className='title-ticket'> عنوان تستی برای تیکت ها </a>
                                <div className="details-send-tickets mt-3">
                                    <span className="replyed px-1 rounded-2"> پاسخ داده شده </span>
                                    <span className='mx-2 department px-1 rounded-2'> مالی </span>
                                    <span className='date text-secondary bg-secondary-500 px-1 rounded-2'> 1402/6/11 </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
            }
        </>
    )
}