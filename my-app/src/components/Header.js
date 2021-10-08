import React from 'react';
import Breadcrumb from './Breadcrumb';
import BreadCrumbMobile from './BreadCrumbMobile';
import Navigation from './Navigation';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

    return (
        <div>
            <Navigation/>
            { isTabletOrMobile ? <BreadCrumbMobile/> : <Breadcrumb/>}
        </div>
    )
}

export default Header
