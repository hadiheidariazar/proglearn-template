import React from 'react'
import FooterItem from '../FooterItem/FooterItem'
import './Footer.css'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footer-widgets rounded-4 px-5 pb-5 pt-3 position-relative">
                    <div className="row">
                        <FooterItem title="درباره ما">
                            <p className="footer-widgets__text text-dark-color">
                                من هادی حیدری آذر هستم و این سایت رو به عنوان یک رزومه برای خودم زدم و امیدوارم که خوشتون اومده باشه پروگ لرن یک آکادمی آموزشی خصوصی برنامه نویسی هستش که به شما برنامه نویسی رو خیلی راحت و اصولی یاد میده و تا رسیدن به بازار کار در کنارتون هستیم تا با علم خودتون بتونید درآمد داشته باشید ما در آکادمی پروگ لرن تمام سعی خودمون رو میکنیم که یک دوره کامل و فوق العاده و پروژه محور و با پشتیبانی مادا العمر به شما تحویل بدیم تا سطح علمی خودتون رو بالا ببرید پروگ لرن اهمیت زیادی به دانشجویانش میده
                            </p>
                        </FooterItem>

                        <FooterItem title="آخرین مطالب">
                            <div className="footer-widgets__links d-flex">
                                <a href='/article/10-best-library-pyrhon-hacking' className="footer-widgets__link my-2">
                                    10 کتابخونه کاربردی پایتون برای هک و امنیت
                                </a>
                                <a href='/article/10-best-library-pyrhon-hacking' className="footer-widgets__link my-2">
                                    10 کتابخونه کاربردی پایتون برای هک و امنیت
                                </a>
                                <a href='/article/10-best-library-pyrhon-hacking' className="footer-widgets__link my-2">
                                    10 کتابخونه کاربردی پایتون برای هک و امنیت
                                </a>
                                <a href='/article/10-best-library-pyrhon-hacking' className="footer-widgets__link my-2">
                                    10 کتابخونه کاربردی پایتون برای هک و امنیت
                                </a>
                                <a href='/article/10-best-library-pyrhon-hacking' className="footer-widgets__link my-2">
                                    10 کتابخونه کاربردی پایتون برای هک و امنیت
                                </a>
                            </div>
                        </FooterItem>

                        <FooterItem title="دسترسی سریع">
                            <div className="row">
                                <div className="col-6">
                                    <a href="/course/html" className="footer-widgets__link">
                                        آموزش HTML
                                    </a>
                                </div>

                                <div className="col-6">
                                    <a href="/course/css" className="footer-widgets__link">
                                        آموزش CSS
                                    </a>
                                </div>

                                <div className="col-6">
                                    <a href="/course/javascript" className="footer-widgets__link">
                                        آموزش جاوا اسکریپت
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="/course/bootstrap" className="footer-widgets__link">
                                        آموزش بوت استرپ
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="/course/reactjs" className="footer-widgets__link">
                                        آموزش ری اکت
                                    </a>
                                </div>

                                <div className="col-6">
                                    <a href="/course/python" className="footer-widgets__link">
                                        آموزش پایتون
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="/contact-us" className="footer-widgets__link">
                                        ارتباط  با ما
                                    </a>
                                </div>
                            </div>

                            <div className="col-12 mt-5 d-none d-lg-flex">
                                <div className="footer-widgets__item">
                                    <span className="footer-widgets__title d-block fs-2 fw-bold">
                                        عضویت در خبرنامه
                                    </span>

                                    <p className='fs-5 mb-3'> جهت اطلاع از آخرین اخبار و تخفیف های سایت مشترک شوید </p>
                                    <div className="d-flex align-items-center">
                                        <input type="email" id="email" className='email-input-register-newsletters w-100 p-2 border' style={{direction: 'rtl'}} placeholder='ایمیل خود را وارد کنید...'
                                        />
                                        <button className='btn btn-secondary btn-register-newsletters'>
                                            عضویت
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </FooterItem>

                        <FooterItem title="عضویت در خبرنامه" isShow={true}>
                            <div className="row d-flex d-lg-none">
                                <div className="col-12 d-flex d-lg-none">
                                    <div className="footer-widgets__item">
                                        <p className='fs-5 mb-3'> جهت اطلاع از آخرین اخبار و تخفیف های سایت مشترک شوید </p>
                                        <div className="d-flex align-items-center">
                                            <input type="email" id="email" className='email-input-register-newsletters w-100 p-2 border' style={{direction: 'rtl'}} placeholder='ایمیل خود را وارد کنید...'
                                            />
                                            <button className='btn btn-secondary btn-register-newsletters'>
                                                عضویت
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FooterItem>

                    </div>
                </div>
            </div>

            <div className="footer__copyright px-3 py-5 text-center d-flex align-items-center justify-content-center">
                <span className="footer__copyright-text fw-bold text-dark-color">
                    کلیه حقوق برای آکادمی آموزش برنامه نویسی پروگ لرن محفوظ است.
                </span>
            </div>
        </footer>
    )
}