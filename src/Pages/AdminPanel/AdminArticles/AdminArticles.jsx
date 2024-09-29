import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import DataTable from '../../../Components/AdminPanel/DataTable/DataTable'
import Editor from '../../../Components/Form/Editor'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import "./AdminArticles.css"

export default function AdminArticles() {

    const [isShowArticleModal, setIsShowArticleModal] = useState(false)
    const [newArticleBody, setNewArticleBody] = useState("")

    const removeArticle = () => {
        swal({
            text: 'آیا از حذف مقاله مورد نظر مطمئنی؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res === true) {
                deleteMainArticle()
            }
        })
    }

    function deleteMainArticle() {
        swal({
            text: 'مقاله مورد نظر با موفقیت حذف شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function createArticle() {
        swal({
            text: 'مقاله جدید با موفقیت ساخته شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function draftArticle() {
        swal({
            text: 'مقاله جدید با موفقیت پیش نویس شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    function updateArticle() {
        swal({
            text: 'مقاله مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            buttons: 'متوجه شدم !'
        })
    }

    return (
        <>
            <TitlePage titlePage="مدیریت مقاله ها" />

            <div className="container-fluid">

                <div id="home-content">
                    <div className="home-content-edit bg-white pb-4 rounded-3">
                        <div className="home-content-users-title px-4">
                            <span>
                                افزودن <span className="signup text-main-color"> مقاله جدید </span>
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
                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
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
                            <div className="col-12 col-sm-6">
                                <div className="price input">
                                    <label className="input-title"> تصویر </label>
                                    <input type="file" accept='image/*' className='p-2' />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="description input">
                                    <label className="input-title" htmlFor='description'> توضیحات کوتاه </label>
                                    <textarea
                                        id='description'
                                        placeholder="توضیحات کوتاه مقاله را وارد کنید..."
                                        className='form-control mt-2 bg-secondary-500 article-description'
                                        rows={6}
                                    />
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
                                        <button className='bg-main-color text-white btn fs-4 px-3 py-2' type='button' onClick={createArticle}>افزدون مقاله
                                        </button>
                                        <button type='button' className='bg-main-color text-white btn fs-4 px-3 py-2 ms-3' onClick={draftArticle}>پیش نویس
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DataTable title="مقاله ها" minWidthTable="600px">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>شناسه</th>
                                <th> عنوان </th>
                                <th>دسته بندی</th>
                                <th>نویسنده</th>
                                <th>وضعیت</th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='first-item'>1</td>
                                <td className='second-item'>
                                    <a href='/article/frontend-vs-backend'>
                                        مقایسه برنامه نویسی فرانت اند با بک اند
                                    </a>
                                </td>
                                <td className='last-item'>برنامه نویسی فرانت اند</td>
                                <td className='last-item'>هادی حیدری آذر</td>
                                <td className='last-item'>منتشر شده</td>
                                <td>
                                    <button type="button" className="btn btn-primary edit-btn" onClick={() =>
                                        setIsShowArticleModal(true)
                                    }>
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeArticle()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className='first-item'>2</td>
                                <td className='second-item'>
                                    <a href='/article/frontend-vs-backend'>
                                        10 تا از بهترین و کاربری ترین کتابخونه های PHP
                                    </a>
                                </td>
                                <td className='last-item'>برنامه نویسی بک اند</td>
                                <td className='last-item'>هادی حیدری آذر</td>
                                <td className='last-item'>پیش نویس</td>
                                <td>
                                    <Link to='draft/frontend-vs-backend' className="btn btn-primary edit-btn text-white draft-article">
                                        کامل کردن
                                    </Link>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger delete-btn" onClick={() => removeArticle()}>
                                        حذف
                                    </button>
                                </td>
                            </tr>


                            <Modal show={isShowArticleModal} onHide={() => setIsShowArticleModal(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
                            >
                                <Modal.Header closeButton className='pe-4'>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        ویرایش مقاله
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form'>
                                    <div className="col-12">
                                        <div className="article-title input">
                                            <label className="input-title mb-2" htmlFor='title'> عنوان جدید </label>
                                            <input
                                                placeholder="عنوان جدید مقاله را وارد کنید..."
                                                type="text"
                                                id="title"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="article-shortname input">
                                            <label className="input-title mb-2" htmlFor='shortname'> اسم کوتاه جدید </label>
                                            <input
                                                placeholder="اسم کوتاه جدید مقاله را وارد کنید (مثال: react-js)"
                                                type="text"
                                                id="shortname"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="article-cover input">
                                            <label className="input-title mb-2" htmlFor='cover'> تصویر جدید </label>
                                            <input
                                                type="file"
                                                id="cover"
                                                className="border bg-secondary-500 mt-2 p-3 w-100 bg-secondary-500"
                                                accept='image/*'
                                            />
                                            <img src="/images/courses/tailwindcss.jpg" alt="Course Image" style={{ width: '100px', height: '65px' }} />
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                                    <Button onClick={() => {
                                        updateArticle()
                                        setIsShowArticleModal(false)
                                    }} variant="success" className='p-2 fs-4 text-center btn-footer-modal'> تغییر اطلاعات </Button>
                                    <Button onClick={() => setIsShowArticleModal(false)} variant="danger" className='p-2 fs-4 text-center btn-footer-modal'> لغو </Button>
                                </Modal.Footer>
                            </Modal>
                        </tbody>
                    </table>
                </DataTable>
            </div>
        </>
    )
}
