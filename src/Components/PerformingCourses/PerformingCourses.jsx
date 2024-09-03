import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import "./PerformingCourses.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CourseBox from '../CourseBox/CourseBox';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function PerformingCourses() {
    return (
        <div className="performing">
            <div className='container'>
                <SectionHeader
                    title="دوره های در حال برگزاری"
                    desc="دوره هایی که در حال برگزاری هستند"
                />
                <div className="courses-content mx-2">
                    <div className="row">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                575: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                }
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper pb-5"
                        >
                            <SwiperSlide>
                                <CourseBox
                                    title='آموزش Javascript (جاوا اسکریپت) بصورت جامع + مینی پروژه'
                                    teacherName="محمد امین سعیدی راد"
                                    price={2250000}
                                    cover='/images/courses/js.png'
                                    off={0}
                                    url='javascript'
                                    isSlider={true}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox
                                    title='آموزش Nodejs بدون پیش نیاز + مینی پروژه'
                                    teacherName="محمد امین سعیدی راد"
                                    price={4300000}
                                    cover='/images/courses/nodejs.jpg'
                                    off={40}
                                    url='nodejs'
                                    isSlider={true}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Bootstrap (بوت استرپ)'
                                    teacherName="هادی حیدری آذر"
                                    price={485000}
                                    cover='/images/courses/bootstrap.jpg'
                                    off={60}
                                    url='bootstrap'
                                    isSlider={true}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    isSlider={true}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox
                                    title="آموزش جاوا اسکریپت سیاه برای هک و امنیت"
                                    teacherName="قدیر یلمه"
                                    price={685000}
                                    cover='/images/courses/js-black.png'
                                    isSlider={true}
                                    off={100}
                                    url='js-black'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox
                                    title="آموزش تست نفوذ با کالی لینوکس + سناریو محور (PWK)"
                                    teacherName="قدیر یلمه"
                                    price={1200000}
                                    isSlider={true}
                                    cover='/images/courses/com_pwk.png'
                                    off={10}
                                    url='pwk'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
