import React, { useState } from 'react'
import "./ArticleBox.css"
import CircleSpinner from './../CircleSpinner/CircleSpinner'

export default function ArticleBox({ title, description, cover, url }) {

    const [isShowImage, setIsShowImage] = useState(false)

    const articleImageLoaded = () => setIsShowImage(true)

    return (
        <div className="col-6 col-md-4">
            <div className="article-card mt-5 rounded-4">
                <div className="article-card__header">
                    <a href={`/article/${url}`} className="article-card__link-img">
                        <img
                            src={cover}
                            alt={title}
                            className="article-card__img img-fluid w-100"
                            onLoad={articleImageLoaded}
                        />

                        {
                            !isShowImage && <CircleSpinner />
                        }
                    </a>
                </div>
                <div className="article-card__content">
                    <div className="article-title">
                        <a href={`/article/${url}`} className="article-card__link fw-bold fs-4">
                            {title}
                        </a>
                    </div>
                    <div className="article-desc mb-4">
                        <p className="article-card__text text-secondary py-2">
                            {description}
                        </p>
                    </div>
                    <a href={`/article/${url}`} className="article-card__btn text-main-color rounded-3 fs-5 py-1 px-2">
                        بیشتر بخوانید
                    </a>
                </div>
            </div>
        </div>
    )
}
