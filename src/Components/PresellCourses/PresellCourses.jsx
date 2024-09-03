import React from 'react'
import "./PresellCourses.css"
import SectionHeader from '../SectionHeader/SectionHeader'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CourseBox from '../CourseBox/CourseBox';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function PresellCourses() {

    return (
        <div className="presell">
            <div className='container'>
                <SectionHeader
                    title="دوره های پیش فروش"
                    desc="دوره هایی که در حال حاضر پیش فروش هستند"
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
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    isSlider={true}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </div>
        </div >
    )
}
