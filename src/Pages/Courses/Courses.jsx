import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import CourseBox from '../../Components/CourseBox/CourseBox'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Breadcrumb from '../../Components/BreadCrumb/BreadCrumb'
import "./Courses.css"

export default function Courses() {

    return (
        <>
            <TitlePage titlePage="تمامی دوره ها" />

            <Topbar />
            <Navbar />

            <Breadcrumb
                links={[
                    { id: 1, title: 'خانه', url: '' },
                    { id: 2, title: "تمامی دوره ها", url: 'courses' }
                ]}
            />

            {/* <!--------------------------------  Courses-Section  --------------------------------> */}
            <section className="courses">
                <div className="container">
                    <div className="courses-content">
                        <div className="container">
                            <div className="row">
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                                <CourseBox
                                    title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی'
                                    teacherName="هادی حیدری آذر"
                                    price={750000}
                                    cover='/images/courses/tailwindcss.jpg'
                                    off={0}
                                    url='tailwindcss'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--------------------------------  Courses-Section  --------------------------------> */}

            <Footer />
        </>
    )
}
