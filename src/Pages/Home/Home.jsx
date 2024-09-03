import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import LastCourses from '../../Components/LastCourses/LastCourses'
import AboutUs from '../../Components/AboutUs/AboutUs'
import PerformingCourses from '../../Components/PerformingCourses/PerformingCourses'
import PresellCourses from '../../Components/PresellCourses/PresellCourses'
import LastArticles from '../../Components/LastArticles/LastArticles'

export default function Home() {
  return (
    <>
        <TitlePage titlePage="پروگ لرن - آکادمی آموزش برنامه نویسی" />
        
        <Header />
        <LastCourses />
        <AboutUs />
        <PerformingCourses />
        <PresellCourses />
        <LastArticles />
    </>
  )
}