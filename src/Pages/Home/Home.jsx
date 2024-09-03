import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import LastCourses from '../../Components/LastCourses/LastCourses'
import AboutUs from '../../Components/AboutUs/AboutUs'

export default function Home() {
  return (
    <>
        <TitlePage titlePage="پروگ لرن - آکادمی آموزش برنامه نویسی" />
        
        <Header />
        <LastCourses />
        <AboutUs />
    </>
  )
}