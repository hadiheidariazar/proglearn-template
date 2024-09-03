import React from 'react'
import "./LastArticles.css"
import SectionHeader from '../SectionHeader/SectionHeader'
import ArticleBox from '../ArticleBox/ArticleBox'

export default function LastArticles() {

    return (
        <div className="last-articles">
            <div className='container'>
                <SectionHeader
                    title="جدید ترین مقاله ها"
                    desc="پیش به سوی ارتقای دانش"
                    btnTitle="تمامی مقاله ها"
                    btnUrl="articles"
                />
                <div className="articles__content">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
