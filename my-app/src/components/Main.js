import React from 'react'
import Banner from './Banner'
import Blogs from './Blogs'
import Cards from './Cards'

const Main = () => {
    return (
        <>
            <section>
                <Banner />
            </section>
            <section>
                <Cards/>
            </section>
            <section>
                <Blogs/>
            </section>
        </>
    )
}

export default Main
