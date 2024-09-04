import React from 'react'
import { BiUser } from 'react-icons/bi'
import { FaUserPlus } from 'react-icons/fa'
import { MdOutlineMailOutline, MdLockOutline } from 'react-icons/md'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import TitlePage from '../../Components/TitlePage/TitlePage'
import ReCAPTCHA from 'react-google-recaptcha'
import swal from 'sweetalert'
import { BsTelephone } from 'react-icons/bs'
import "./../Login/Login-Register.css"

export default function Register() {

    const registerNewUser = () => {
        swal({
            text: 'شما با موفقیت ثبت نام شدید',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="ساخت حساب کاربری" />

            <Topbar />
            <Navbar />

            <section className="login-register d-flex justify-content-center position-relative">
                <div className="login register-form bg-white d-flex align-items-center p-5 rounded-4 mx-4">
                    <span className="login__title text-secondary d-block mb-4">ساخت حساب کاربری</span>
                    <span className="login__subtitle text-secondary d-block"> خوشحالیم قراره به جمع ما بپیوندی :)</span>
                    <div className="login__new-member bg-secondary-500 my-4 rounded-3 w-100 d-flex justify-content-center py-4 align-items-center">
                        <span className="login__new-member-text text-secondary">قبلا ثبت‌نام کرده‌اید؟ </span>
                        <a href='/login' className="login__new-member-link text-white bg-secondary ms-2 rounded-3 py-2 px-3">
                            وارد شوید
                        </a>
                    </div>
                    <form action="#" className="login-form w-100" onSubmit={event => event.preventDefault()}>
                        <div className="login-form__username position-relative">
                            <input
                                className="login-form__username-input form-control my-2 rounded-2"
                                type="text"
                                id="name"
                                placeholder="نام و نام خانوادگی"
                            />
                            <BiUser className='login-form__username-icon text-secondary position-absolute' />
                        </div>
                        <div className="login-form__username position-relative">
                            <input
                                className="login-form__username-input form-control my-2 rounded-2"
                                type="text"
                                id="username"
                                placeholder="نام کاربری"
                            />
                            <BiUser className='login-form__username-icon text-secondary position-absolute' />
                        </div>
                        <div className="login-form__username position-relative">
                            <input
                                className="login-form__username-input form-control my-2 rounded-2"
                                type="tel"
                                id="phone"
                                placeholder="شماره تماس"
                            />
                            <BsTelephone className='login-form__username-icon text-secondary position-absolute' />
                        </div>
                        <div className="login-form__password position-relative">
                            <input
                                className="login-form__password-input form-control my-2 rounded-2"
                                type="email"
                                id="email"
                                placeholder="آدرس ایمیل"
                            />
                            <MdOutlineMailOutline className='login-form__username-icon text-secondary position-absolute' />
                        </div>
                        <div className="login-form__password position-relative">
                            <input
                                className="login-form__password-input form-control my-2 rounded-2"
                                type="password"
                                id="password"
                                placeholder="رمز عبور"
                            />
                            <MdLockOutline className='login-form__password-icon text-secondary position-absolute' />
                        </div>
                        <div className="my-5">
                            <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' />
                        </div>
                        <button className='login-form__btn w-100 rounded-3 mt-3 d-flex align-items-center position-relative' onClick={registerNewUser}>
                            <FaUserPlus className='login-form__btn-icon text-white position-absolute' />
                            <span className="login-form__btn-text text-white mx-auto">
                                ثبت نام
                            </span>
                        </button>
                    </form>
                    <div className="login__des mt-5 text-secondary w-100">
                        <span className="login__des-title">سلام کاربر محترم:</span>
                        <ul className="login__des-list mt-3 ms-3">
                            <li className="login__des-item my-2">
                                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                                استفاده کنید.
                            </li>
                            <li className="login__des-item my-2">
                                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
                            </li>
                            <li className="login__des-item my-2">
                                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
