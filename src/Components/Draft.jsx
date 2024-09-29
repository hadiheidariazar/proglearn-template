import React, { useState } from 'react'
import TitlePage from './TitlePage/TitlePage'
import Editor from './Form/Editor'
import { useNavigate } from 'react-router-dom'

export default function Draft() {

    const [newArticleBody, setNewArticleBody] = useState("")

    const navigate = useNavigate()

    function createArticle() {
        swal({
            text: 'مقاله پیش نویس با موفقیت منتشر شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        }).then(() => navigate('/panel-admin/articles'))
    }

    function draftArticle() {
        swal({
            text: 'مقاله جدید با موفقیت پیش نویس شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        }).then(() => navigate('/panel-admin/articles'))
    }

    return (
        <>

            <TitlePage titlePage="کامل کردن مقاله پیش نویس" />

            <div id="home-content">
                <div className="home-content-edit bg-white pb-4 rounded-3">
                    <div className="home-content-users-title px-4">
                        <span>
                            کامل کردن <span className="signup text-main-color"> مقاله پیش نویس </span>
                        </span>
                    </div>
                    <form className="form">
                        <div className="col-12 col-sm-6">
                            <div className="name input">
                                <label className="input-title" htmlFor='title'> عنوان </label>
                                <input
                                    type="text"
                                    id='title'
                                    placeholder="عنوان مقاله را وارد کنید..."
                                    className='form-control mt-2 bg-secondary-500'
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="price input">
                                <label className="input-title" htmlFor='shortname'> اسم کوتاه </label>
                                <input
                                    type="text"
                                    id='shortname'
                                    placeholder="اسم کوتاه مقاله را وارد کنید (مثال: react-js)"
                                    className='form-control mt-2 bg-secondary-500'
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="number input">
                                <label className="input-title">دسته‌ بندی</label>
                                <select className='form-select mt-2 bg-secondary-500 px-3 select-category pe-5'>
                                    <option value="برنامه نویسی فرانت اند">برنامه نویسی فرانت اند</option>
                                    <option value="برنامه نویسی بک اند">برنامه نویسی بک اند</option>
                                    <option value="برنامه نویسی امنیت">برنامه نویسی امنیت</option>
                                    <option value="برنامه نویسی پایتون">برنامه نویسی پایتون</option>
                                    <option value="مهارت های نرم">مهارت های نرم</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-9">
                            <div className="price input">
                                <label className="input-title"> تصویر </label>
                                <input type="file" accept='image/*' className='p-2' />
                            </div>
                        </div>
                        <div className="col-12 col-sm-3">
                            <div className="price input">
                                <img src='/images/courses/tailwindcss.jpg' alt='Course Image' style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="description input">
                                <label className="input-title" htmlFor='description'> توضیحات کوتاه </label>
                                <textarea
                                    id='description'
                                    type="textarea"
                                    placeholder="توضیحات کوتاه مقاله را وارد کنید..."
                                    className='form-control mt-2 bg-secondary-500 article-description'
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="price input">
                                <label className="input-title mb-2"> محتوا </label>
                                <Editor
                                    value={newArticleBody}
                                    setValue={setNewArticleBody}
                                />
                            </div>
                        </div>
                        <div className="col-12 order-sm-3">
                            <div className="bottom-form">
                                <div className="submit-btn">
                                    <button className='bg-main-color text-white btn fs-4 px-3 py-2' type='button' onClick={() => createArticle()}>انتشار کردن
                                    </button>
                                    <button type='button' className='bg-main-color text-white btn fs-4 px-3 py-2 ms-3' onClick={() => draftArticle()}>پیش نویس
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}