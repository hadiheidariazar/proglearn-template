import React from 'react'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import Breadcrumb from '../../Components/Breadcrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import TitlePage from '../../Components/TitlePage/TitlePage'

export default function Articles() {
    return (
        <>
            <TitlePage titlePage="تمامی مقاله ها" />

            <Topbar />
            <Navbar />

            <Breadcrumb
                links={[
                    { id: 1, title: 'خانه', url: '' },
                    { id: 2, title: "تمامی مقاله ها", url: 'articles' }
                ]}
            />

            <section className="articles">
                <div className="container">
                    <div className="articles-content">
                        <div className="container">
                            <div className="row">
                                <ArticleBox
                                    title='10 کتابخونه کاربردی پایتون برای هک و امنیت'
                                    cover='/images/blog/6.jpg'
                                    description='در این مقاله قصد دارم 10 تا از بهترین و کاربردی ترین کتابخونه های پایتون رو برای هک و امنیت بهتون معرفی کنم بریم شروع کنیم...'
                                    url='10-best-library-pyrhon-hacking'
                                />
                                <ArticleBox
                                    title='10 کتابخونه کاربردی پایتون برای هک و امنیت'
                                    cover='/images/blog/6.jpg'
                                    description='در این مقاله قصد دارم 10 تا از بهترین و کاربردی ترین کتابخونه های پایتون رو برای هک و امنیت بهتون معرفی کنم بریم شروع کنیم...'
                                    url='10-best-library-pyrhon-hacking'
                                />
                                <ArticleBox
                                    title='10 کتابخونه کاربردی پایتون برای هک و امنیت'
                                    cover='/images/blog/6.jpg'
                                    description='در این مقاله قصد دارم 10 تا از بهترین و کاربردی ترین کتابخونه های پایتون رو برای هک و امنیت بهتون معرفی کنم بریم شروع کنیم...'
                                    url='10-best-library-pyrhon-hacking'
                                />
                                <ArticleBox
                                    title='10 کتابخونه کاربردی پایتون برای هک و امنیت'
                                    cover='/images/blog/6.jpg'
                                    description='در این مقاله قصد دارم 10 تا از بهترین و کاربردی ترین کتابخونه های پایتون رو برای هک و امنیت بهتون معرفی کنم بریم شروع کنیم...'
                                    url='10-best-library-pyrhon-hacking'
                                />
                                <ArticleBox
                                    title='10 کتابخونه کاربردی پایتون برای هک و امنیت'
                                    cover='/images/blog/6.jpg'
                                    description='در این مقاله قصد دارم 10 تا از بهترین و کاربردی ترین کتابخونه های پایتون رو برای هک و امنیت بهتون معرفی کنم بریم شروع کنیم...'
                                    url='10-best-library-pyrhon-hacking'
                                />
                                <ArticleBox
                                    title='10 کتابخونه کاربردی پایتون برای هک و امنیت'
                                    cover='/images/blog/6.jpg'
                                    description='در این مقاله قصد دارم 10 تا از بهترین و کاربردی ترین کتابخونه های پایتون رو برای هک و امنیت بهتون معرفی کنم بریم شروع کنیم...'
                                    url='10-best-library-pyrhon-hacking'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
