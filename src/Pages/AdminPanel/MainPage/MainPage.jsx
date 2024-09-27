import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { MdVideoLibrary } from 'react-icons/md'
import { PiVideoFill } from 'react-icons/pi'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./MainPage.css"

export default function MainPage() {

    const data = [
        {
            name: 'فروردین',
            "تعداد": 6265,
            max: 10000
        },
        {
            name: 'اردیبهشت',
            "تعداد": 4250,
            max: 10000
        },
        {
            name: 'خرداد',
            "تعداد": 6854,
            max: 10000
        },
        {
            name: 'تیر',
            "تعداد": 7400,
            max: 10000
        },
        {
            name: 'مرداد',
            "تعداد": 8090,
            max: 10000
        },
        {
            name: 'شهریور',
            "تعداد": 5400,
            max: 10000
        },
        {
            name: 'مهر',
            "تعداد": 6000,
            max: 10000
        },
        {
            name: 'آبان',
            "تعداد": 3621,
            max: 10000
        },
        {
            name: 'آذر',
            "تعداد": 2500,
            max: 10000
        },
        {
            name: 'دی',
            "تعداد": 6641,
        },
        {
            name: 'بهمن',
            "تعداد": 3766,
        },
        {
            name: 'اسفند',
            "تعداد": 5800,
        },
    ];

    return (
        <>
            <TitlePage titlePage="صفحه اصلی داشبورد" />

            <div className="container-fluid">
                <div className="home-content-title">
                    <span className="welcome">
                        خوش آمدید, <span className="name mx-1"> هادی حیدری آذر </span>
                        عزیز
                    </span>
                </div>
                <div className="home-content-boxes">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="home-content-revanue box">
                                <div className="home-box">
                                    <div className="home-box-left">
                                        <div className="home-box-title">
                                            <span>ثبت نامی ها</span>
                                        </div>
                                        <div className="home-box-value">
                                            <div className="home-box-price text-main-color">
                                                <span>10,432</span>
                                            </div>

                                        </div>
                                        <div className="home-box-text text-secondary">
                                            <span>ثبت نامی ها در یک ماه گذشته</span>
                                        </div>
                                    </div>
                                    <div className="home-box-right">
                                        <div className="home-box-icon">
                                            <FaUsers className='fs-1 text-main-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mt-4 mt-sm-0 col-md-4">
                            <div className="home-content-revanue box">
                                <div className="home-box">
                                    <div className="home-box-left">
                                        <div className="home-box-title">
                                            <span> دوره ها </span>
                                        </div>
                                        <div className="home-box-value">
                                            <div className="home-box-price text-main-color">
                                                <span>40</span>
                                            </div>

                                        </div>
                                        <div className="home-box-text text-secondary">
                                            <span>دوره ها در یک ماه گذشته</span>
                                        </div>
                                    </div>
                                    <div className="home-box-right">
                                        <div className="home-box-icon">
                                            <MdVideoLibrary className='fs-1 text-main-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mt-4 mt-md-0 col-md-4">
                            <div className="home-content-revanue box">
                                <div className="home-box">
                                    <div className="home-box-left">
                                        <div className="home-box-title">
                                            <span>جلسات</span>
                                        </div>
                                        <div className="home-box-value">
                                            <div className="home-box-price text-main-color">
                                                <span>917</span>
                                            </div>

                                        </div>
                                        <div className="home-box-text text-secondary">
                                            <span>جلسات در یک ماه گذشته</span>
                                        </div>
                                    </div>
                                    <div className="home-box-right">
                                        <div className="home-box-icon">
                                            <PiVideoFill className='fs-1 text-main-color' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <DataTable title="ثبت نام ماهانه" minWidthTable="770px">
                    <div className='w-100 pb-3' style={{ height: '300px' }}>
                        <ResponsiveContainer>
                            <AreaChart
                                data={data.reverse()}
                                margin={{
                                    top: 10,
                                    right: 25,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis dataKey="max" />
                                <Tooltip />
                                <Area type="monotone" dataKey="تعداد" stroke="#13af3d" fill="#13af3d" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </DataTable>
                <DataTable title="ثبت نامی های اخیر" minWidthTable="350px">

                    <table className="table">
                        <thead>
                            <tr>
                                <th className="fs-3" style={{ width: '10px' }}>شناسه</th>
                                <th className="fs-3">نام و نام خانوادگی</th>
                                <th className="fs-3" style={{ width: '100px' }}>تاریخ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='fs-5'>1</td>
                                <td className='fs-5'>هادی حیدری آذر</td>
                                <td className='fs-5'>1402/6/1</td>
                            </tr>
                            <tr>
                                <td className='fs-5'>2</td>
                                <td className='fs-5'>هادی حیدری آذر</td>
                                <td className='fs-5'>1402/6/1</td>
                            </tr>
                            <tr>
                                <td className='fs-5'>3</td>
                                <td className='fs-5'>هادی حیدری آذر</td>
                                <td className='fs-5'>1402/6/1</td>
                            </tr>
                            <tr>
                                <td className='fs-5'>4</td>
                                <td className='fs-5'>هادی حیدری آذر</td>
                                <td className='fs-5'>1402/6/1</td>
                            </tr>
                            <tr>
                                <td className='fs-5'>5</td>
                                <td className='fs-5'>هادی حیدری آذر</td>
                                <td className='fs-5'>1402/6/1</td>
                            </tr>
                        </tbody>
                    </table>

                </DataTable>
            </div>
        </>
    )
}