import React from 'react';
import logo from "../assets/logo/logo.png";
import cart from "../assets/cart/shape.png"
import search from "../assets/search/shape.png";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./styles.css";
import menu from "../assets/icon-menu.png"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Container className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo.png" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={menu} alt="logo.png"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <div className="d-flex justify-content-between" style={{width: "100%"}}>
                        <ul className="navbar-nav my-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Experience
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Concern
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Skin Type
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Brands
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Accessories</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Bath and Beyond
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Subscription
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <Link className="nav-link sign-up" to="/">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-2" to="/">
                                    <img src={cart} alt="cart.png" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <img src={search} alt="search.png" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

const Container = styled.div`
    .navbar-brand{
        object-fit: contain;
    }
    ul{
        li{
        /* font-size: 0.938rem; */
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        .sign-up{
            width: 105px;
            height: 45px;
            padding: 10px 29px 13px 31px;
            background-color: #e40c2b;
            /* font-size: 0.875rem; */
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.43;
            letter-spacing: normal;
            text-align: center;
            color: #f7f4e9 !important;
        }
        .dropdown-toggle::after {
            display: inline-block;
            content: url(https://mcusercontent.com/b92d2485d10e61be82fefc4e7/images/43acb17a-a528-e7f2-d26c-cbf9c2fda471.png);
            border: none;
            vertical-align: initial;
        }
    }
    }
`;

export default Navigation
