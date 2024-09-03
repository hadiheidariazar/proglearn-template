import React from 'react'
import CourseBox from '../CourseBox/CourseBox'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function LastCourses() {

    return (
        <div className='courses mt-5'>
            <div className='container'>
                <SectionHeader title='جدید ترین دوره ها' desc="سکوی پرتاب شما به سمت موفقیت" btnTitle="تمامی دوره ها" btnUrl="courses" />
                <div className="courses-content">
                    <div className="row">
                        <CourseBox
                            title='آموزش صفر تا صد HTML + پروژه محور'
                            teacherName='هادی حیدری آذر'
                            price={150000}
                            cover='/images/courses/html.png'
                            off={100}
                            url='html'
                        />
                        <CourseBox
                            title='آموزش صفر تا صد CSS + پروژه محور'
                            teacherName='هادی حیدری آذر'
                            price={200000}
                            cover='/images/courses/css.png'
                            off={25}
                            url='css'
                        />
                        <CourseBox
                            title='آموزش Javascript (جاوا اسکریپت) بصورت جامع + مینی پروژه'
                            teacherName="محمد امین سعیدی راد"
                            price={2250000}
                            cover='/images/courses/js.png'
                            off={0}
                            url='javascript'
                        />
                        <CourseBox
                            title='آموزش Nodejs بدون پیش نیاز + مینی پروژه'
                            teacherName="محمد امین سعیدی راد"
                            price={4300000}
                            cover='/images/courses/nodejs.jpg'
                            off={40}
                            url='nodejs'
                        />
                        <CourseBox
                            title='آموزش مقدماتی تا پیشرفته Bootstrap (بوت استرپ)'
                            teacherName="هادی حیدری آذر"
                            price={485000}
                            cover='/images/courses/bootstrap.jpg'
                            off={60}
                            url='bootstrap'
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
                            title="آموزش جاوا اسکریپت سیاه برای هک و امنیت"
                            teacherName="قدیر یلمه"
                            price={685000}
                            cover='/images/courses/js-black.png'
                            off={100}
                            url='js-black'
                        />
                        <CourseBox
                            title="آموزش تست نفوذ با کالی لینوکس + سناریو محور (PWK)"
                            teacherName="قدیر یلمه"
                            price={1200000}
                            cover='/images/courses/com_pwk.png'
                            off={10}
                            url='pwk'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
