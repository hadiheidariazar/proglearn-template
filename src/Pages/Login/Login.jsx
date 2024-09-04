import React from 'react'
import { BiUser } from 'react-icons/bi'
import { MdLockOutline } from 'react-icons/md'
import { PiSignOutBold } from 'react-icons/pi'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import TitlePage from '../../Components/TitlePage/TitlePage'
import swal from 'sweetalert'
import ReCAPTCHA from 'react-google-recaptcha'
import "./Login-Register.css"

export default function Login() {

    const loginUser = () => {
        swal({
            text: 'شما با موفقیت وارد حساب کاربری خود شدید',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="ورود به حساب کاربری" />

            <Topbar />
            <Navbar />

            <section className="login-register d-flex justify-content-center position-relative">
                <div className="login bg-white d-flex align-items-center p-5 rounded-4 mx-4">
                    <span className="login__title text-secondary d-block mb-4">ورود به حساب کاربری</span>
                    <span className="login__subtitle text-secondary d-block">
                        خوشحالیم دوباره میبینیمت دوست عزیز :)
                    </span>
                    <div className="login__new-member bg-secondary-500 my-4 rounded-3 w-100 d-flex justify-content-center py-4 align-items-center">
                        <span className="login__new-member-text text-secondary">کاربر جدید هستید؟</span>
                        <a className="login__new-member-link text-white bg-secondary ms-2 rounded-3 py-2 px-3" href="/register">
                            ثبت نام
                        </a>
                    </div>
                    <form className="login-form w-100" onSubmit={event => event.preventDefault()}>
                        <div className="login-form__username position-relative">
                            <input
                                id="username"
                                type="text"
                                className="login-form__username-input form-control my-2 rounded-2"
                                placeholder="نام کاربری یا آدرس ایمیل"
                            />
                            <BiUser className='login-form__username-icon position-absolute text-secondary' />
                        </div>
                        <div className="login-form__password position-relative">
                            <input
                                id="password"
                                type="password"
                                className="login-form__password-input form-control my-2 rounded-2"
                                placeholder="رمز عبور"
                            />
                            <MdLockOutline className='login-form__password-icon position-absolute text-secondary' />

                        </div>
                        <div className="my-5">
                            <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' />
                        </div>
                        <button className='login-form__btn w-100 rounded-3 mt-3 d-flex align-items-center position-relative' onClick={loginUser}>
                            <PiSignOutBold className='login-form__btn-icon text-white position-absolute' />
                            <span className="login-form__btn-text text-white mx-auto">
                                ورود
                            </span>
                        </button>
                        <div className="login-form__password-setting d-flex align-items-center justify-content-between my-3">
                            <label className="login-form__password-remember d-flex align-items-center">
                                <input className="login-form__password-checkbox me-2" type="checkbox" />
                                <span className="login-form__password-text text-secondary">
                                    مرا به خاطر داشته باش
                                </span>
                            </label>
                            <label className="login-form__password-forget">
                                <a className="login-form__password-forget-link" href="#">
                                    رمز عبور را فراموش کرده اید؟
                                </a>
                            </label>
                        </div>
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