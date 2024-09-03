import React from 'react'
import { Helmet } from 'react-helmet'

export default function TitlePage({ titlePage }) {
    return (
        <Helmet>
            <title> {titlePage} - پروگ لرن </title>
        </Helmet>
    )
}
