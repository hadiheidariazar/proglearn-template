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
    )
}
