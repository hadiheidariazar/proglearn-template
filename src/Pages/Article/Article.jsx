import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import { BsArrowRight, BsFolder2Open, BsArrowLeft } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { BiTimeFive, BiLogoTwitter, BiLogoFacebook } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'
import TitlePage from '../../Components/TitlePage/TitlePage'
import "./Article.css"

export default function Article() {
    return (
        <>

            <TitlePage titlePage='اطلاعات مقاله' />

            <Topbar />
            <Navbar />
            <Breadcrumb
                links={[
                    { id: 1, title: 'خانه', url: '' },
                    { id: 2, title: "مقاله ها", url: 'articles' },
                    { id: 3, title: '10 کتابخونه کاربردی پایتون برای هک و امنیت', url: 'article/10-best-library-pyrhon-hacking' },
                ]}
            />

            <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="article p-5 rounded-2">
                                <h1 className="article__title fw-bold text-dark-color pb-3">
                                    10 کتابخونه کاربردی پایتون برای هک و امنیت
                                </h1>
                                <div className="article__header d-flex align-items-center pt-3 row">
                                    <div className="article-header__category article-header__item col-6 col-md-4 mt-3">
                                        <BsFolder2Open className='article-header__icon text-secondary' />
                                        <span className="article-header__text ms-1 text-secondary">
                                            آموزش برنامه نویسی پایتون
                                        </span>
                                    </div>
                                    <div className="article-header__category article-header__item col-6 col-md-4 mt-3">
                                        <FiUser className='article-header__icon text-secondary' />
                                        <span className="article-header__text text-secondary">
                                            ارسال شده توسط
                                            هادی حیدری آذر
                                        </span>
                                    </div>
                                    <div className="article-header__category article-header__item col-6 col-md-4 mt-3">
                                        <BiTimeFive className='article-header__icon text-secondary' />
                                        <span className="article-header__text text-secondary">
                                            تاریخ انتشار: 1402/6/6
                                        </span>
                                    </div>
                                </div>

                                <img
                                    src='/images/blog/6.jpg'
                                    alt="Article Image"
                                    className="article__seconadary-banner d-block mx-auto w-100 mt-5"
                                />
                                <div className="article-section">
                                    <p>در این مقاله به 5 تا از بهترین کتابخانه پایتون برای هک و امنیت می پردازیم. همونطور که میدونید زبان پایتون توی هک و امنیت شاه بقیه زبان ها حساب میشه! چرا؟ از آسون بودن و سریع بودن و … پایتون که بگذریم، پایتون بین زبان های برنامه نویسی دیگه بهترین کتابخانه های هک رو داره و یه جورایی به شعبده باز معروفه.<br />پایتون اگر تفنگ باشه، کتابخونه هاش مثل باروت عمل میکنن پس تفنگاتون رو آماده کنین تا باروت های خوب رو بهتون معرفی کنیم<br />با ما باشید تا در این مقاله 5 تا از بهترین کتابخانه های پایتون برای هک رو به شما معرفی کنیم.
                                    </p>
                                    <p>&nbsp;</p>
                                    <h2>1_ کتابخانه scapy</h2>
                                    <p>یکی از بهترین کتابخانه های که پایتون دارد و در شبکه کاربرد زیادی دارد و میشه باهاش کارهای بامزه ای انجام داد اسکپی است.<br />با استفاده از این کتابخانه شما میتوانید پکت های دلخواه را تولید کنید و در سطح شبکه ارسال کنید. در واقع شما میتوانید برنامه ای بنویسید که از طریق آن شبکه را اسنیف کنید یا حتی میتوانید شبکه را اسکن کنید همچنین میتوانید حمله هایی را در بستر شبکه پیاده سازی کنید. (اسنیف به معنای شنود ارتباطات شبکه است)
                                    </p>
                                    <p>اگر با مباحث پیرامون spoofing در هک و امنیت آشنا باشد متوجه خواهید شد که در این قسمت ما میتوانیم آدرس یک هاست دیگر را به عنوان source ip بگذاریم و حمله smurf که جز حملات ddos است رو با اضافه کردن چند خط کد دیگر پیاده سازی کنیم<br />خب در scapy برای اینکه یک یا چند لایه از OSI را بهم بچسبانیم از عملگر / استفاده میکنیم در دستور بالا ما مقصد بسته را مشخص کردیم حال باید پروتکل ICMP را به آن اضافه کنیم به همین منظور از دستور زیر استفاده میکنیم:
                                    </p>
                                    <p>(“ping = IP(dst=”192.168.1.150”,src=”192.168.1.111</p>
                                    <p>اگر با مباحث پیرامون spoofing در هک و امنیت آشنا باشد متوجه خواهید شد که در این قسمت ما میتوانیم آدرس یک هاست دیگر را به عنوان source ip بگذاریم و حمله smurf که جز حملات ddos است رو با اضافه کردن چند خط کد دیگر پیاده سازی کنیم<br />خب در scapy برای اینکه یک یا چند لایه از OSI را بهم بچسبانیم از عملگر / استفاده میکنیم در دستور بالا ما مقصد بسته را مشخص کردیم حال باید پروتکل ICMP را به آن اضافه کنیم به همین منظور از دستور زیر استفاده میکنیم:</p>
                                    <p>&nbsp;()ping = ping/ICMP</p>
                                    <p>حالا با استفاده از متد show() میتوانیم محتویات لایه ۳ بسته را که درست کردیم را ببینیم:</p>
                                    <p>()ping.show</p>
                                    <p>در مرحله آخر با استفاده از متد sr() بسته را در شبکه میفرستیم:</p>
                                    <p>sr(ping)</p>
                                    <p>&nbsp;</p>
                                    <h2>2_ کتابخانه requests</h2>
                                    <p>هدف از ساخت کتابخانه ریکوِست در پایتون ایجاد استانداردهایی برای ارسال و دریافت است.که وب سایت <a href="https://www.geeksforgeeks.org/top-7-python-libraries-used-for-hacking/">geeksforgeeks</a> نیز به ان اشاره کرده است.&nbsp; (درخواست‌های مبتنی بر HTTPهای نوشته شده برایAPI).</p>
                                    <p>در این کتابخانه می‌توان به کمک برنامه، بر روی به‌کارگیری داده‌ها و خدمات ارائه شده توسط یک سیستم مبتنی بر وب تمرکز کرد و دیگر درگیر سایر جنبه‌ها و پیچیدگی‌های برنامه‌نویسی مرتبط با سرویس وب نشد.</p>
                                    <h3>نحوه کار با کتابخانه requests</h3>
                                    <p>ابتدا دستور زیر را در محیط کد نویسی یا ترمینال میزنیم :</p>
                                    <p>$ pip install requests</p>
                                    <p>&nbsp;</p>
                                    <p>سپس کتابخانه را فراخوانی میکنیم :</p>
                                    <p>import requests</p>
                                </div>

                                <div className="article-social-media d-flex align-items-center">
                                    <span className="article-social-media__text text-secondary">اشتراک گذاری :</span>
                                    <a href="#" className="article-social-media__link d-flex align-items-center m-2 text-secondary">
                                        <FaTelegramPlane className='article-social-media__icon' />
                                    </a>
                                    <a href="#" className="article-social-media__link d-flex align-items-center m-2 text-secondary">
                                        <BiLogoTwitter className="article-social-media__icon" />
                                    </a>
                                    <a href="#" className="article-social-media__link d-flex align-items-center m-2 text-secondary">
                                        <BiLogoFacebook className='article-social-media__icon' />
                                    </a>
                                </div>

                            </div>

                            <div className="suggestion-articles rounded-2 bg-secondary-500">
                                <div className="row">
                                    <div className="col-12 col-md-6 order-2 order-md-0 mt-5 mt-md-0">
                                        <div className="suggestion-articles__right suggestion-articles__content justify-content-center d-flex align-items-center position-relative">
                                            <a href="#" className="suggestion-articles__icon-link text-secondary">
                                                <BsArrowRight className="suggestion-articles__icon" />
                                            </a>
                                            <a href="#" className="suggestion-articles__link text-center mx-4 mt-3">
                                                سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 order-1 order-md-0">
                                        <div className="suggestion-articles__left suggestion-articles__content justify-content-center d-flex align-items-center position-relative">
                                            <a href="#" className="suggestion-articles__icon-link text-secondary">
                                                <BsArrowLeft className="suggestion-articles__icon" />
                                            </a>
                                            <a href="#" className="suggestion-articles__link text-center mx-4 mt-3">
                                                سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
