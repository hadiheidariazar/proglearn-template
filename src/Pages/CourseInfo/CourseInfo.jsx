import React, { useState } from 'react'
import { BsTwitter, BsFillInfoCircleFill, BsYoutube, BsFillCheckCircleFill } from 'react-icons/bs'
import { FaTelegramPlane, FaFacebookF, FaCalendarAlt, FaPlay, FaChalkboardTeacher, FaRegComments, FaComments } from 'react-icons/fa'
import { HiStatusOnline } from 'react-icons/hi'
import { BiSolidTimeFive, BiSupport, BiSolidLockAlt } from 'react-icons/bi'
import { PiStudentFill, PiLinkSimple } from 'react-icons/pi'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import CourseDetailBox from '../../Components/CourseDetailBox/CourseDetailBox'
import { Accordion, Button, Modal } from 'react-bootstrap'
import TitlePage from '../../Components/TitlePage/TitlePage'
import swal from 'sweetalert'
import "./CourseInfo.css"

export default function CourseInfo() {
    const [isShowReplyToCommentModal, setIsShowReplyToCommentModal] = useState(false)

    const registeredAtCourse = () => {
        swal({
            text: 'اکنون شما دانشجوی دوره هستید',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage='اطلاعات دوره' />

            <Topbar />
            <Navbar />
            <Breadcrumb
                links={[
                    { id: 1, title: 'خانه', url: '' },
                    { id: 2, title: 'برنامه نویسی فرانت اند', url: 'category/frontend' },
                    { id: 3, title: 'آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی', url: "course/tailwindcss" },
                ]}
            />
            <>
                <section className="course-info">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 pe-md-4 order-2 order-md-0 mt-5 mt-md-0">
                                <a href='/category/frontend' className="course-info__link text-main-color fs-6 rounded-2 px-3 py-2">
                                    آموزش برنامه نویسی فرانت اند
                                </a>
                                <h1 className="course-info__title my-5 fw-bold">
                                    آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                </h1>
                                <p className="course-info__text text-secondary">
                                    آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                    آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                    آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                    آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                    آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                    آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                </p>
                                <div className="course-info__social-media mt-4">
                                    <a href="#" className="course-info__social-media-item">
                                        <FaTelegramPlane className='course-info__icon fs-2' />
                                    </a>
                                    <a href="#" className="course-info__social-media-item mx-4">
                                        <BsTwitter className='course-info__icon fs-2' />
                                    </a>
                                    <a href="#" className="course-info__social-media-item">
                                        <FaFacebookF className='course-info__icon fs-2' />
                                    </a>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 order-1 order-md-0">
                                <video
                                    src=""
                                    poster="/images/courses/tailwindcss.jpg"
                                    className="course-info__video w-100 rounded-4"
                                    controls
                                ></video>
                            </div>
                        </div>
                    </div>
                </section>

                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8 order-2 order-lg-0 mt-5 mt-lg-0">
                                <div className="course">
                                    <div className="course-boxes">
                                        <div className="row">
                                            <CourseDetailBox
                                                title='وضعیت دوره'
                                                text='تکمیل شده'
                                                iconBox={HiStatusOnline}
                                            />
                                            <CourseDetailBox
                                                iconBox={BiSolidTimeFive}
                                                title=" مدت زمان دوره"
                                                text='07:48:32'
                                            />
                                            <CourseDetailBox
                                                iconBox={FaCalendarAlt}
                                                title="آخرین بروزرسانی"
                                                text='1402/6/2'
                                            />
                                            <CourseDetailBox
                                                iconBox={BiSupport}
                                                title="روش پشتیبانی"
                                                text="آنلاین"
                                            />
                                            <CourseDetailBox
                                                iconBox={BsFillInfoCircleFill}
                                                title="پیش نیاز"
                                                text='HTML & CSS'
                                            />
                                            <CourseDetailBox
                                                iconBox={FaPlay}
                                                title="نوع مشاهده"
                                                text="ضبط شده / آنلاین"
                                            />
                                        </div>
                                    </div>

                                    {/* Start Introduction */}

                                    <div className="introduction p-4 p-sm-5 rounded-3">
                                        <div className="introduction__btns">
                                            <a href="#" className="introduction__btns-item text-main-color p-2 p-sm-3 rounded-3">
                                                دانلود همگانی ویدیوها
                                            </a>
                                            <a href="#" className="introduction__btns-item text-main-color p-2 p-sm-3 rounded-3">
                                                دانلود همگانی پیوست‌ها
                                            </a>
                                        </div>

                                        <div className="introduction__topic">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0" className="accordion">
                                                    <Accordion.Header className='ac'>جلسات دوره</Accordion.Header>
                                                    <a href="#" className="introduction__accordion-link text-dark-color">
                                                        <Accordion.Body className="introduction__accordion-body d-flex align-items-center justify-content-between p-3">
                                                            <div className="introduction__accordion-right d-flex align-items-center me-2">
                                                                <span className="introduction__accordion-count d-flex align-items-center justify-content-center">
                                                                    1
                                                                </span>
                                                                <BsYoutube className='introduction__accordion-icon mx-3' />
                                                                معرفی دوره + نکات تکمیلی
                                                            </div>
                                                            <div className="introduction__accordion-left">
                                                                <span className="introduction__accordion-time">
                                                                    05:18
                                                                </span>
                                                            </div>
                                                        </Accordion.Body>
                                                    </a>
                                                    <a href="#" className="introduction__accordion-link text-dark-color">
                                                        <Accordion.Body className="introduction__accordion-body d-flex align-items-center justify-content-between p-3">
                                                            <div className="introduction__accordion-right d-flex align-items-center me-2">
                                                                <span className="introduction__accordion-count d-flex align-items-center justify-content-center">
                                                                    2
                                                                </span>
                                                                <BsYoutube className='introduction__accordion-icon mx-3' />
                                                                معرفی تیلویند
                                                            </div>
                                                            <div className="introduction__accordion-left">
                                                                <span className="introduction__accordion-time">
                                                                    15:07
                                                                </span>
                                                            </div>
                                                        </Accordion.Body>
                                                    </a>
                                                    <a href="#" className="introduction__accordion-link text-dark-color">
                                                        <Accordion.Body className="introduction__accordion-body d-flex align-items-center justify-content-between p-3">
                                                            <div className="introduction__accordion-right d-flex align-items-center me-2">
                                                                <span className="introduction__accordion-count d-flex align-items-center justify-content-center">
                                                                    3
                                                                </span>
                                                                <BsYoutube className='introduction__accordion-icon mx-3' />
                                                                نصب تیلویند
                                                            </div>
                                                            <div className="introduction__accordion-left">
                                                                <span className="introduction__accordion-time">
                                                                    09:47
                                                                </span>
                                                            </div>
                                                        </Accordion.Body>
                                                    </a>
                                                    <span className="introduction__accordion-link text-dark-color">
                                                        <Accordion.Body className="introduction__accordion-body d-flex align-items-center justify-content-between p-3">
                                                            <div className="introduction__accordion-right d-flex align-items-center me-2">
                                                                <span className="introduction__accordion-count d-flex align-items-center justify-content-center">
                                                                    4
                                                                </span>
                                                                <BiSolidLockAlt className='introduction__accordion-icon mx-3' />
                                                                آموزش کار با کلاس ها در تیلویند
                                                            </div>
                                                            <div className="introduction__accordion-left">
                                                                <span className="introduction__accordion-time">
                                                                    12:36
                                                                </span>
                                                            </div>
                                                        </Accordion.Body>
                                                    </span>
                                                    <span className="introduction__accordion-link text-dark-color">
                                                        <Accordion.Body className="introduction__accordion-body d-flex align-items-center justify-content-between p-3">
                                                            <div className="introduction__accordion-right d-flex align-items-center me-2">
                                                                <span className="introduction__accordion-count d-flex align-items-center justify-content-center">
                                                                    5
                                                                </span>
                                                                <BiSolidLockAlt className='introduction__accordion-icon mx-3' />
                                                                آموزش کار با رنگ ها در تیلویند
                                                            </div>
                                                            <div className="introduction__accordion-left">
                                                                <span className="introduction__accordion-time">
                                                                    04:44
                                                                </span>
                                                            </div>
                                                        </Accordion.Body>
                                                    </span>
                                                </Accordion.Item>
                                            </Accordion>

                                        </div>
                                    </div>

                                    <div className="techer-details rounded-3 px-4 px-sm-5 py-4 mt-5">
                                        <div className="techer-details__header d-flex align-items-center justify-content-between">
                                            <div className="techer-details__header-right d-flex align-items-center">
                                                <img
                                                    src="/images/profiles/default-profile.jpg"
                                                    alt="هادی حیدری آذر"
                                                    className="techer-details__header-img"
                                                />
                                                <div className="techer-details__header-titles d-flex ms-3">
                                                    <a href="#" className="techer-details__header-link">
                                                        هادی حیدری آذر
                                                    </a>
                                                    <span className="techer-details__header-skill text-secondary mt-2">
                                                        برنامه نویسی فرانت اند
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="techer-details__header-left d-flex align-items-center text-white bg-main-color py-2 px-3 rounded-3">
                                                <FaChalkboardTeacher className='techer-details__header-icon' />
                                                <span className="techer-details__header-name ms-2">مدرس</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Finish Teacher Details */}

                                    <div className="comments rounded-3 py-4 px-4 px-md-5 mt-5">
                                        <div className="comments__header d-flex align-items-center">
                                            <div className="comments__header-icon-content bg-main-color text-white d-flex align-items-center justify-content-center rounded-4">
                                                <FaComments className='comments__header-icon' />
                                            </div>
                                            <span className="comments__header-title ms-3"> دیدگاه ها </span>
                                        </div>
                                        <div className="comments__content">
                                            <div className="comments__item bg-light rounded-4 p-4 p-md-5 mb-5">
                                                <div className="comments__question">
                                                    <div className="comments__question-header">
                                                        <div className="comments__question-header-right">
                                                            <span className="comments__question-name comment-name text-dark-color fw-bold me-3">
                                                                محمد نصرتی
                                                            </span>
                                                            <div>
                                                                <span className="comments__question-status comment-status d-inline-block align-items-center bg-main-color text-white fw-bold py-1 px-2 rounded-2 me-2 mt-3 mt-sm-0">
                                                                    خریدار محصول
                                                                </span>
                                                                <span className="comments__question-date comment-date text-secondary d-inline-block">
                                                                    1402/5/30
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="comments__question-header-left">
                                                            <Button className="comments__question-header-link comment-link text-secondary py-1 py-sm-2 px-2 px-sm-3 rounded-1 text-white bg-primary" onClick={() => setIsShowReplyToCommentModal(true)}>
                                                                پاسخ
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="comments__question-text mt-4">
                                                        <p className="comments__question-paragraph comment-paragraph text-secondary">
                                                            <span>سلام</span>
                                                            <br />
                                                            <span>دوره جامع و کامل و فوق العاده ای بود</span>
                                                            <br />
                                                            <span>با سپاس</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comments__item bg-light rounded-4 p-4 p-md-5 mb-5">
                                                <div className="comments__question">
                                                    <div className="comments__question-header">
                                                        <div className="comments__question-header-right">
                                                            <span className="comments__question-name comment-name text-dark-color fw-bold me-3">
                                                                علیرضا مرادی فر
                                                            </span>
                                                            <div>
                                                                <span className="comments__question-status comment-status d-inline-block align-items-center bg-main-color text-white fw-bold py-1 px-2 rounded-2 me-2 mt-3 mt-sm-0">
                                                                    کاربر
                                                                </span>
                                                                <span className="comments__question-date comment-date text-secondary d-inline-block">
                                                                    1402/5/24
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="comments__question-header-left">
                                                            <a className="comments__question-header-link anwser-link py-1 px-2 rounded-1 text-white bg-primary" href='/login'>
                                                                ابتدا وارد شوید
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="comments__question-text mt-4">
                                                        <p className="comments__question-paragraph comment-paragraph text-secondary">
                                                            <span>سلام</span>
                                                            <br />
                                                            <span>دوره جامع و کامل و فوق العاده ای بود</span>
                                                            <br />
                                                            <span>با سپاس</span>
                                                        </p>
                                                    </div>
                                                    <div className="question__item bg-light rounded-4 p-4 p-md-5 my-5 my-md-0 mt-md-5">
                                                        <div className="comments__question">
                                                            <div className="comments__question-header">
                                                                <div className="comments__question-header-right">
                                                                    <span className="comments__question-name comment-name text-dark-color fw-bold me-3">
                                                                        هادی حیدری آذر
                                                                    </span>
                                                                    <div>
                                                                        <span className="comments__question-status comment-status d-inline-block align-items-center bg-main-color text-white fw-bold py-1 px-2 rounded-2 me-2 mt-3 mt-sm-0">
                                                                            مدیر
                                                                        </span>
                                                                        <span className="comments__question-date comment-date text-secondary d-inline-block">
                                                                            1402/6/1
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="comments__question-text mt-4">
                                                                <p className="comments__question-paragraph comment-paragraph text-secondary">
                                                                    <span> با سلام </span>
                                                                    <br />
                                                                    <span>خوشحالم دوره برات مفید بود</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Modal show={isShowReplyToCommentModal} onHide={() => setIsShowReplyToCommentModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
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
                                                                className="border bg-secondary-500 mt-2 p-2 w-100 bg-secondary-500 fs-5"
                                                                id="reply-content"
                                                                rows={8}
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                                    <Button onClick={() => setIsShowReplyToCommentModal(false)} variant="success" className='p-2 fs-4 text-center btn-buy-course'> ارسال پاسخ </Button>
                                                    <Button onClick={() => setIsShowReplyToCommentModal(false)} variant="danger" className='p-2 fs-4 text-center btn-buy-course'> لغو </Button>
                                                </Modal.Footer>
                                            </Modal>

                                        </div>
                                        <div className="comments__rules d-flex mb-5">
                                            <span className="comments__rules-title text-dark-color fw-bold mb-4">قوانین ثبت دیدگاه</span>
                                            <span className="comments__rules-item text-secondary mb-1">
                                                <BsFillCheckCircleFill className='comments__rules-icon text-main-color me-2' />
                                                اگر نیاز به پشتیبانی دوره دارید از قسمت پرسش سوال در قسمت نمایش انلاین
                                                استفاده نمایید و سوالات مربوط به رفع اشکال تایید نخواهند شد
                                            </span>
                                            <span className="comments__rules-item text-secondary mb-1">
                                                <BsFillCheckCircleFill className='comments__rules-icon text-main-color me-2' />
                                                دیدگاه های نامرتبط به دوره تایید نخواهد شد.
                                            </span>
                                            <span className="comments__rules-item text-secondary mb-1">
                                                <BsFillCheckCircleFill className='comments__rules-icon text-main-color me-2' />
                                                سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد.
                                            </span>
                                            <span className="comments__rules-item text-secondary mb-1">
                                                <BsFillCheckCircleFill className='comments__rules-icon text-main-color me-2' />
                                                از درج دیدگاه های تکراری پرهیز نمایید.
                                            </span>
                                        </div>
                                        <div className="comments__respond bg-secondary-500 rounded-2 p-5">
                                            <div className="comments__respond-content">
                                                <div className="comments__respond-title text-secondary mb-2">دیدگاه شما *</div>
                                                <textarea className="comments__score-input-respond form-control rounded-2 py-2 px-3" rows={10} placeholder='دیدگاه خود را بنویسید...'>
                                                </textarea>
                                            </div>
                                            <Button type="submit" className='comments__respond-btn bg-main-color text-white rounded-2 mt-4 px-3 py-2'>
                                                ارسال دیدگاه
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-lg-4 order-1 order-lg-0 mb-4 mb-lg-0">
                                <div className="courses-info-aside">
                                    <div className="course-info-aside rounded-3 mt-1 p-4 p-sm-5">
                                        <button type='button' className="course-info__register-title text-white fw-bold w-100" style={{ border: 'none' }}>
                                            <div className="course-info__register bg-danger text-center py-4 px-3 rounded-3" onClick={registeredAtCourse}>
                                                <span>
                                                    ثبت نام در دوره
                                                </span>
                                            </div>
                                        </button>
                                        <div className="course-price mt-5 d-flex">
                                            <div className="main-price d-flex justify-content-between">
                                                <div className="price-title">
                                                    <span> قیمت دوره: </span>
                                                </div>
                                                <div className="price">
                                                    <span className='course-price-value text-main-color'>
                                                        486,500
                                                        <span className='fs-6 fw-bold ms-1'> تومان </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="off-price mt-3 d-flex justify-content-between">
                                                <span className='text-danger'>
                                                    25%
                                                </span>
                                                <span className='text-danger course-discount text-decoration-line-through'>
                                                    720,000
                                                    <span className='fs-6 fw-bold ms-1'>
                                                        تومان
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-info-aside rounded-3 mt-1 p-4 p-sm-5">
                                        <div className="course-info__total">
                                            <div className="course-info__top d-flex align-items-center justify-content-center p-4 rounded-4">
                                                <div className="course-info__total-sale">
                                                    <PiStudentFill className='course-info__total-sale-icon me-2' />
                                                    <span className="course-info__total-sale-text">
                                                        تعداد دانشجو :
                                                    </span>
                                                    <span className="course-info__total-sale-number d-inline-block mt-2 px-3 py-2 rounded-2 ms-2 bg-secondary-500 text-dark-color">1,238</span>
                                                </div>
                                            </div>
                                            <div className="course-info__bottom d-flex justify-content-evenly pt-5 text-secondary">
                                                <div className="course-info__total-comment position-relative d-flex align-items-center">
                                                    <FaRegComments className='course-info__total-comment-icon' />
                                                    <span className="course-info__total-comment-text ms-3">
                                                        596 دیدگاه
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-info-aside rounded-3 mt-1 p-4 p-sm-5">
                                        <div className="course-info__header-short-url d-flex align-items-center text-secondary">
                                            <PiLinkSimple className='course-info__total-comment-icon' />
                                            <span className="course-info__short-url-text ms-2">لینک کوتاه</span>
                                        </div>
                                        <span className="course-info__short-url d-block my-2 border text-secondary rounded-2 px-3 py-2" onClick={() => {
                                            navigator.clipboard.writeText(location.href).then(res => alert('لینک کوتاه مورد نظر شما کپی شد'))
                                        }}>
                                            {location.href}
                                        </span>
                                    </div>
                                    <div className="course-info-aside rounded-3 mt-1 p-4 p-sm-5">
                                        <span className="course-info__courses-title d-block text-dark-color mb-4">دوره های مرتبط</span>
                                        <ul className="course-info__courses-list p-0">
                                            <li className="course-info__courses-list-item">
                                                <a href='/course/tailwindcss' className="course-info__courses-link d-flex align-items-center">
                                                    <img
                                                        src='/images/courses/tailwindcss.jpg'
                                                        alt='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                                        className="course-info__courses-img"
                                                    />
                                                    <span className="course-info__courses-text ms-2 fw-bold">
                                                        آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="course-info__courses-list-item">
                                                <a href='/course/tailwindcss' className="course-info__courses-link d-flex align-items-center">
                                                    <img
                                                        src='/images/courses/tailwindcss.jpg'
                                                        alt='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                                        className="course-info__courses-img"
                                                    />
                                                    <span className="course-info__courses-text ms-2 fw-bold">
                                                        آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="course-info__courses-list-item">
                                                <a href='/course/tailwindcss' className="course-info__courses-link d-flex align-items-center">
                                                    <img
                                                        src='/images/courses/tailwindcss.jpg'
                                                        alt='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                                        className="course-info__courses-img"
                                                    />
                                                    <span className="course-info__courses-text ms-2 fw-bold">
                                                        آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="course-info__courses-list-item">
                                                <a href='/course/tailwindcss' className="course-info__courses-link d-flex align-items-center">
                                                    <img
                                                        src='/images/courses/tailwindcss.jpg'
                                                        alt='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                                        className="course-info__courses-img"
                                                    />
                                                    <span className="course-info__courses-text ms-2 fw-bold">
                                                        آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </>

            <Footer />
        </>
    )
}
