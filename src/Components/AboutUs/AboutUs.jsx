import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import "./AboutUs.css"
import AboutUsBox from '../AboutUsBox/AboutUsBox'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { FaLeaf, FaGem, FaCrown } from 'react-icons/fa'

export default function AboutUs() {
    return (
        <>
            <div className='about-us'>
                <div className='container'>

                    <SectionHeader
                        title="ما چه کمکی بهتون میکنیم؟"
                        desc="از اونجایی که اکادمی آموزشی پروگ لرن یک آکادمی خصوصی هست"
                    />

                    <div className="container mt-4">
                        <div className="row">
                            <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" iconSection={AiFillCopyrightCircle} />
                            <AboutUsBox title="اجازه تدریس" desc="به هر مدرسی رو نمیده. چون کیفیت براش مهمه !" iconSection={FaLeaf} />
                            <AboutUsBox title="دوره پولی و رایگان" desc="براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و آپدیت دوره ارائه بده" iconSection={FaGem} />
                            <AboutUsBox title="اهمیت به کاربر" desc="اولویت اول و آخر آکادمی آموزش برنامه نویسی پروگ لرن اهمیت به کاربرها و رفع نیازهای آموزشی و رسوندن اونها به بازار کار هست" iconSection={FaCrown} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
