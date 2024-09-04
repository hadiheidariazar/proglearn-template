import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import swal from 'sweetalert'
import { BiUser } from 'react-icons/bi'
import { MdOutlineMail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import TitlePage from '../../Components/TitlePage/TitlePage'
import "./ContactUs.css"

export default function ContactUs() {

    const addNewContact = () => {
        swal({
            text: 'پیام شما با موفقیت به مدیران سایت ارسال شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="ارتباط با ما" />
            <Topbar />
            <Navbar />

            <section className="contact-us-section d-flex justify-content-center position-relative">
                <div className="contact-us contact-us-form d-flex align-items-center rounded-2 bg-white py-5 px-4 px-sm-5 mx-3">
                    <span className="contact-us__title d-block text-secondary">ارتباط با ما</span>
                    <span className="contact-us__subtitle d-block text-secondary mt-2">
                        نظر یا انتقادتو بنویس برامون :)
                    </span>
                    <form action="#" className="contact-us-form w-100 mt-4" onSubmit={event => event.preventDefault()}>
                        <div className="contact-us-form__username contact-us-form__parent position-relative">
                            <input
                                id="name"
                                className="contact-us-form__username-input w-100 p-4 my-2 rounded-2"
                                type="text"
                                placeholder="نام و نام خانوادگی"
                            />
                            <BiUser className="contact-us-form__username-icon position-absolute text-secondary" />
                        </div>
                        <div className="contact-us-form__password contact-us-form__parent position-relative">
                            <input
                                id="email"
                                className="contact-us-form__password-input w-100 p-4 my-2 rounded-3"
                                type="text"
                                placeholder="آدرس ایمیل"
                            />
                            <MdOutlineMail className='contact-us-form__password-icon position-absolute text-secondary' />
                        </div>
                        <div className="contact-us-form__phone-number contact-us-form__parent position-relative">
                            <input
                                id="phone"
                                className="contact-us-form__password-input w-100 p-4 my-2 rounded-3"
                                type="text"
                                placeholder="شماره تماس"
                            />
                            <BsTelephone className="contact-us-form__password-icon position-absolute text-secondary" />
                        </div>
                        <div className="contact-us-form__text contact-us-form__parent position-relative">
                            <textarea
                                id="body"
                                className="contact-us-form__text-input w-100 p-4 my-2 rounded-3"
                                rows={7}
                                placeholder="پیام خود را بنویسید..."
                            />
                        </div>
                        <button
                            className='contact-us-form__btn w-100 rounded-2 py-4 px-2 mt-3 d-flex align-items-center'
                            onClick={addNewContact}
                        >
                            <span className="contact-us-form__btn-text text-white mx-auto">
                                ارسال کردن
                            </span>
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    )
}
