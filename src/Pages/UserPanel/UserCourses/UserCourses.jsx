import React from 'react'
import { AiOutlineDollar } from 'react-icons/ai'
import { MdMoneyOffCsred } from 'react-icons/md'
import { RxRocket } from 'react-icons/rx'
import CourseBox from '../../../Components/UserPanel/CourseBox/CourseBox'
import SectionHeader from '../../../Components/SectionHeader/SectionHeader'
import InfosBox from '../../../Components/UserPanel/InfosBox/InfosBox'
import TitlePage from '../../../Components/TitlePage/TitlePage'

export default function UserCourses() {
    return (
        <>
            <TitlePage titlePage="دوره های من - پنل کاربری" />

            <div className="sidebar-box-infos row">
                <InfosBox
                    size={"col-12 col-sm-6 col-md-4 col-xl-4"}
                    icon={RxRocket}
                    title="کل دوره ها"
                    description='20 دوره'
                    type="courses"
                />
                <InfosBox
                    size={"col-12 col-sm-6 col-md-4 col-xl-4 mt-4 mt-sm-0"}
                    icon={AiOutlineDollar}
                    title="دوره های پولی"
                    description='14 دوره'
                    type="money-courses"
                />
                <InfosBox
                    size={"col-12 col-sm-6 col-md-4 col-xl-4 mt-4 mt-md-0"}
                    icon={MdMoneyOffCsred}
                    title="دوره های رایگان"
                    description="6 دوره"
                    type="free-courses"
                />
            </div>

            <section className="courses-container mt-5">
                <SectionHeader title="دوره های پولی" desc="دوره هایی که با پرداخت هزینه تهیه کردید" />
                <div className="money-courses row mt-3">
                    <CourseBox title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی' cover='/images/courses/tailwindcss.jpg' url='tailwindcss' />
                    <CourseBox title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی' cover='/images/courses/tailwindcss.jpg' url='tailwindcss' />
                    <CourseBox title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی' cover='/images/courses/tailwindcss.jpg' url='tailwindcss' />
                </div>
                <SectionHeader title="دوره های رایگان" desc="دوره هایی که بدون پرداخت هزینه تهیه کردید" />
                <div className="free-courses row mt-3">
                    <CourseBox title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی' cover='/images/courses/tailwindcss.jpg' url='tailwindcss' />
                    <CourseBox title='آموزش مقدماتی تا پیشرفته Tailwindcss (تیلویند) + دیزاین اختصاصی' cover='/images/courses/tailwindcss.jpg' url='tailwindcss' />
                </div>
            </section>
        </>
    )
}