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
        </div>
    )
}
