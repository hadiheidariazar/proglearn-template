import React from 'react'
import { RxRocket } from 'react-icons/rx'
import { BsTicketDetailed } from 'react-icons/bs'
import InfosBox from '../../../Components/UserPanel/InfosBox/InfosBox'
import TitlePage from '../../../Components/TitlePage/TitlePage'

export default function Counter() {
    return (
        <>

            <TitlePage titlePage="پیشخوان - پنل کاربری" />

            <div className="sidebar-box-infos row">
                <InfosBox
                    size={"col-12 col-sm-6"}
                    icon={RxRocket}
                    title="دوره های من"
                    description='10 دوره'
                    type="courses"
                />
                <InfosBox
                    size={"col-12 col-sm-6 mt-4 mt-sm-0"}
                    icon={BsTicketDetailed}
                    title="مجموع تیکت ها"
                    description='10 تیکت'
                    type="tickets"
                />
            </div>

            <p className='mt-5 counter-text'>
                از طریق پیشخوان حساب کاربری‌تان، می‌توانید دوره هایی که در آن ها ثبت نام کردید را مشاهده کنید و اگر مشکلی یا سوالی هم داشتید تیکت ارسال کنید و آنها را مدیریت کنید و جزییات حساب کاربری و کلمه عبور خود را ویرایش کنید.
            </p>
        </>
    )
}